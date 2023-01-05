import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardWrapper = styled.li.attrs(() => ({
  className: `flex flex-col space-y-4 items-center rounded-md border-2 border-white p-2`
}))``;

const ImageWrapper = styled.div.attrs(() => ({
  className: `relative w-40 h-52 md:w-48 md:h-64 xl:w-52 xl:h-72`
}))``;

const AnimeTitle = styled.div.attrs(() => ({
  className: `text-sm md:text-md text-white font-medium text-center`
}))``;

export default function AnimeCard(props) {
  const { anime } = props;

  return (
    <Link href={`anime/${anime?.entry?.mal_id}`} passHref={true} data-testid="anime-link">
      <CardWrapper>
        <ImageWrapper data-testid="anime-image">
          <Image
            className="rounded-md"
            src={anime?.entry?.images?.webp?.image_url}
            alt={anime?.entry?.title}
            fill
          />
        </ImageWrapper>
        <AnimeTitle data-testid="anime-title">
          {anime?.entry?.title}
        </AnimeTitle>
      </CardWrapper>
    </Link>
  )
}
