import { useMemo } from 'react';

export interface PaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}

export const DOTS = '...';
// функция для генерации диапазона страниц
function range(start: number, end: number): number[] {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

export function usePagination({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: PaginationProps): (number | string)[] {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5; // Определяет количество страниц для пагинации, включая соседние страницы, первую и последнюю страницы, текущую страницу и многоточия.

    /*
      Если количество страниц меньше, чем количество страниц, которые мы хотим показать в нашем
      компоненте пагинации, мы возвращаем диапазон [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );

    /*
      Не показываем многоточия, если есть только одна позиция слева или справа
      от левого или правого индекса страницы
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // Если не нужно показывать многоточие слева , но нужно показывать справа
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    // Если нужно показывать многоточие слева , но не нужно показывать справа
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Если нужно показывать многоточие и слева и справа, то формируется диапазон страниц от левого соседа до правого соседа, добавляются многоточие, первая и последняя страницы.
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
}
