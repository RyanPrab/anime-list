import styled from "styled-components";
import AnimeCard from "./AnimeCard";

const ListWrapper = styled.div.attrs(() => ({
  className: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start`
}))``;

export default function AnimeList(props) {
  const { animes } = props;

  return (
    <ListWrapper>
      {
        animes?.data?.map((item, index) => {
          return (
            <AnimeCard
              key={index}
              anime={item}
            />
          )
        })
      }
    </ListWrapper>
  )
}
