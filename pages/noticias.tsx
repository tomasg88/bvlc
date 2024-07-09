import styles from 'styles/PageSidebar.module.css';

import React, { FC, useMemo, useState } from 'react';
import { sanityClient } from 'lib/sanity.client';
import { allPostQuery } from 'lib/sanity.queries';
import { GetStaticProps } from 'next';

import Layout from 'components/Layout/Layout';
import { News } from 'types/models';

import HeroNews from 'components/HeroNews/HeroNews';
import CardNewsHorizontal from 'components/CardNewsHorizontal/CardNewsHorizontal';
import Pagination from 'components/Pagination/Pagination';
import PaginationContent from 'components/Pagination/PaginationContent';
import PaginationItem from 'components/Pagination/PaginationItem';
import PaginationLink from 'components/Pagination/PaginationLink';
import PaginationNext from 'components/Pagination/PaginationNext';
import PaginationPrevious from 'components/Pagination/PaginationPrevious';
import Input from 'components/Input/Input';

interface NewsProps {
  list: News[];
}

const ITEMS_PER_PAGE = 5;

const Noticias: FC<NewsProps> = ({ list }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const indexOflastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOflastItem - ITEMS_PER_PAGE;

  const filteredList = useMemo(
    () =>
      list.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }),
    [searchTerm]
  );

  const currentItems = filteredList.slice(indexOfFirstItem, indexOflastItem);

  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <Layout title="Noticias">
      <div className="pb-24 bg-gray-100">
        <HeroNews />
        <div className={styles.page}>
          <div className="max-w-5xl grid-cols-1 gap-6 px-6 pt-12 pb-10 mx-auto md:px-0 border-b-2 border-yellow-400">
            <div id="content" className="w-full">
              <div className="grid max-w-4xl grid-cols-1 gap-10 mx-auto ">
                <Input type="text" placeholder="Buscar noticias..." onChange={handleInputChange} />
                {filteredList.length < 1 ? (
                  <div className="text-center font-semibold text-xl text-gray-500">
                    Su búsqueda no arrojó resultados.
                  </div>
                ) : (
                  currentItems.map((n) => <CardNewsHorizontal {...n} key={n._id} />)
                )}
              </div>
            </div>
          </div>
        </div>

        {/* TODO - Make this pagination reusable */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <PaginationItem key={pageNumber} onClick={() => paginate(pageNumber)}>
                <PaginationLink href="#" isCurrentPage={pageNumber === currentPage}>
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => paginate(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Layout>
  );
};

export default Noticias;

export const getStaticProps: GetStaticProps = async () => {
  const list: News[] = await sanityClient.fetch(allPostQuery);
  return {
    props: { list },
  };
};
