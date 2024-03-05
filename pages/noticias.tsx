import React, { FC, useState } from 'react';
import Layout from 'components/Layout/Layout';
import { sanityClient } from 'lib/sanity.client';
import { News, NewsType } from 'types/News';
import { allPostQuery } from 'lib/sanity.queries';
import HeroNews from 'components/HeroNews/HeroNews';
import CardNewsHorizontal from 'components/CardNewsHorizontal/CardNewsHorizontal';
import styles from 'styles/PageSidebar.module.css';
import { GetStaticProps } from 'next';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from 'components/Pagination/Pagination';

const itemsPerPage = 5;

const Noticias: FC<NewsType> = ({ list }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOflastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOflastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOflastItem);

  const totalPages = Math.ceil(list.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Layout title="Noticias">
      <div className="pb-24 bg-gray-100">
        <HeroNews />
        <div className={styles.page}>
          <div className="max-w-5xl grid-cols-1 gap-6 px-6 pt-12 pb-24 mx-auto md:px-0">
            <div id="content" className="w-full">
              <div className="grid max-w-4xl grid-cols-1 gap-3 mx-auto ">
                {currentItems && currentItems.map((n) => <CardNewsHorizontal {...n} key={n._id} />)}
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
