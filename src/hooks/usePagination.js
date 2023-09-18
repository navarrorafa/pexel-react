// hooks/usePagination.js

 import { useState } from 'react';

export const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
    console.log(page)
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return [page, nextPage, prevPage];
};

