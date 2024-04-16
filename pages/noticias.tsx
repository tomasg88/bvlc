import styles from 'styles/PageSidebar.module.css';

import React, { FC, useState } from 'react';
import { sanityClient } from 'lib/sanity.client';
import { allPostQuery } from 'lib/sanity.queries';
import { GetStaticProps } from 'next';

import Layout from 'components/Layout/Layout';
import { News, NewsType } from 'types/News';

import HeroNews from 'components/HeroNews/HeroNews';
import CardNewsHorizontal from 'components/CardNewsHorizontal/CardNewsHorizontal';
import Pagination from 'components/Pagination/Pagination';
import PaginationContent from 'components/Pagination/PaginationContent';
import PaginationItem from 'components/Pagination/PaginationItem';
import PaginationLink from 'components/Pagination/PaginationLink';
import PaginationNext from 'components/Pagination/PaginationNext';
import PaginationPrevious from 'components/Pagination/PaginationPrevious';
import Input from 'components/Input/Input';

const Noticias: FC<NewsType> = ({ list }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const itemsPerPage = 5;
  const indexOflastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOflastItem - itemsPerPage;

  const filteredList = list.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const isFilteredListEmpty = filteredList.length < 1;

  const currentItems = filteredList.slice(indexOfFirstItem, indexOflastItem);

  const totalPages = Math.ceil(list.length / itemsPerPage);

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
                {isFilteredListEmpty ? (
                  <div className="text-center font-semibold text-md text-gray-500">
                    Su busqueda no arrojó resultados.
                  </div>
                ) : (
                  currentItems.map((n) => <CardNewsHorizontal {...n} key={n._id} />)
                )}
              </div>
            </div>
          </div>
        </div>
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
