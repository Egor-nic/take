import { useMemo, useState } from 'react';
import Filters from '~/FSD/entities/Filters/Filters';
import Pagination from '~/FSD/entities/Paginatin/Pagination';
import Products from '~/FSD/entities/Products/Products';
import { products } from '~/FSD/shared/lib/constants';
import Container from '~/FSD/shared/ui/wrappers/Container/Container';

export function meta() {
  return [
    { title: 'TAKE' },
  ];
};

export default function Search() {
  const [page, setPage] = useState(1);
  const numbersShowElements = 6;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (page - 1) * numbersShowElements;
    const lastPageIndex = firstPageIndex + numbersShowElements;

    if (products.length < numbersShowElements) {
      setPage(1);
    }

    return products?.slice(firstPageIndex, lastPageIndex);
  }, [page]);

  return (
    <>
      <Filters />
      <Container>
        <Products products={currentTableData} />
        <Pagination
          onPageChange={setPage}
          totalCount={products.length}
          currentPage={page}
          pageSize={numbersShowElements}
        />
      </Container>
    </>
  );
}
