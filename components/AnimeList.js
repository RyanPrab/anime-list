import styled from "styled-components";
import AnimeCard from "./AnimeCard";
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";

const ListWrapper = styled.ul.attrs(() => ({
  className: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start`
}))``;

const InputContainer = styled.div.attrs(() => ({
  className: `relative flex items-center justify-self-stretch flex-grow text-gray-600`
}))``;

const SearchInput = styled.input.attrs((props) => ({
  className: `rounded-lg text-xs xl:text-sm px-4 py-4 focus:outline-none w-full shadow-sm bg-primary`,
}))``;

export default function AnimeList(props) {
  const { animes } = props;

  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(Math.ceil(animes?.data.length / itemsPerPage));
  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    setCurrentItems(animes?.data.slice(itemOffset, endOffset));
  }, [animes, itemOffset, endOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % animes?.data.length;
    setItemOffset(newOffset);
  };

  const typingKeywordHandler = () => {
    if (query?.length > 2) {
      setKeyword(query);
      setItemOffset(0);
    } else {
      setKeyword("");
    }
  }

  useEffect(() => {
    if (keyword) {
      setCurrentItems(animes?.data.filter(anime => anime?.entry?.title.toLowerCase().includes(keyword.toLowerCase())));
      setPageCount(Math.ceil(currentItems.length / itemsPerPage));
    } else {
      setCurrentItems(animes?.data);
      setPageCount(Math.ceil(animes?.data.length / itemsPerPage))
    }
  }, [keyword]);

  if (!currentItems) {
    return null;
  }

  return (
    <>
      <InputContainer>
        <SearchInput
          placeholder="Find Anime"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            typingKeywordHandler();
          }}
        />
      </InputContainer>
      <ListWrapper role="list" data-testid="anime-list" >
        {
          currentItems.map((item, index) => {
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
