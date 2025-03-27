/* eslint-disable react/no-array-index-key */
import classNames from 'classnames';
import { DOTS, usePagination } from './lib/usePagination';
import styles from './Pagination.module.scss';

interface PaginationProps {
  onPageChange: (value: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

export default function Pagination({
  onPageChange,
  totalCount, // максимальное число страниц
  siblingCount = 1, // соседний элемент
  currentPage, // текущая страница на которой находимся
  pageSize, // количество отображаемых страниц за один раз
}: PaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  // // перелистываем одну страницу вперед
  // const onNext = () => {
  //   onPageChange(currentPage + 1);
  // };

  // // перелистываем одну страницу назад
  // const onPrevious = () => {
  //   onPageChange(currentPage - 1);
  // };

  // // перемещаемся к самой последней странице
  // const onLastPage = () => {
  //   onPageChange(Number(lastPage));
  // };

  // // возвращаемся к самой первой странице
  // const onFirstPage = () => {
  //   onPageChange(Number(paginationRange[0]));
  // };

  // const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={styles.pagination}>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li key={index}>&#8230;</li>;
        }

        const isCurrentPage = pageNumber === currentPage;

        return (
          <li
            key={index}
            className={classNames(styles.link, {
              [styles.active]: isCurrentPage,
            })}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </li>
        );
      })}
    </ul>
  );
}
