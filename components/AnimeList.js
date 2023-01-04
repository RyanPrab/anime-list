import styled from "styled-components";
import AnimeCard from "./AnimeCard";
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";

const ListWrapper = styled.ul.attrs(() => ({
  className: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start`
}))``;

export default function AnimeList(props) {
  const { animes } = props;

  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(animes?.data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % animes?.data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListWrapper role="list" data-testid="anime-list" >
        {
          animes?.data.slice(itemOffset, endOffset).map((item, index) => {
            return (
              <AnimeCard
                key={index}
                anime={item}
              />
            )
          })
        }
      </ListWrapper>
      <ReactPaginate
        className="flex flex-row space-x-2 w-full text-white font-medium justify-center"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  )
}
