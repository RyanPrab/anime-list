import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from "next/link";

const Section = styled.div.attrs(() => ({
  className: `flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 justify-center items-center lg:items-start`
}))``;

const ImageWrapper = styled.div.attrs(() => ({
  className: `relative w-40 h-52 md:w-48 md:h-64 xl:w-52 xl:h-72`
}))``;

const AnimeInfoWrapper = styled.div.attrs(() => ({
  className: `flex flex-col space-y-4 w-4/5`
}))``;

const AnimeTitle = styled.h1.attrs(() => ({
  className: `text-white text-md lg:text-xl font-semibold`
}))``;

const ScoreSection = styled.div.attrs(() => ({
  className: `flex flex-row justify-around bg-blue-200 rounded-md p-4`
}))``;

const ScoreWrapper = styled.div.attrs(() => ({
  className: `flex flex-col space-y-2 items-center`
}))``;

const ScoreTitle = styled.div.attrs(() => ({
  className: `text-sm font-medium text-white bg-blue-600 p-1 rounded-sm`
}))``;

const Score = styled.div.attrs(() => ({
  className: `text-md lg:text-lg font-semibold`
}))``;

const Divider = styled.hr.attrs(() => ({
  className: `border-t border-gray-300 `
}))``;

const SectionTitle = styled.h2.attrs(() => ({
  className: `text-white text-sm lg:text-md font-medium `
}))``;

const SectionDescription = styled.div.attrs(() => ({
  className: `text-white text-sm lg:text-md leading-normal text-justify`
}))``;

const ButtonShow = styled.div.attrs(() => ({
  className: `border-2 border-white rounded-md cursor-pointer text-center w-24 p-1 my-2`
}))``;

export default function AnimeDetail(props) {
  const { anime } = props;

  const [showMoreSynopsis, setShowMoreSynopsis] = useState(false);
  const [showMoreBackground, setShowMoreBackground] = useState(false);

  const animeSynopsis = anime.synopsis || "";
  const animeBackground = anime.background || "";

  return (
    <>
      <Link
        data-testid="home-link"
        href='/'
        passHref={true}
        className="flex w-full items-center text-white"
      >
        <AiOutlineArrowLeft className="mr-2"/>
        Back to homepage
      </Link>
      <Section>
        <div className="flex justify-center w-full lg:w-1/5">
          <ImageWrapper data-testid="anime-image">
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              fill
            />
          </ImageWrapper>
        </div>
        <AnimeInfoWrapper>
          <AnimeTitle data-testid="anime-title">
            {anime.title}
          </AnimeTitle>
          <Divider/>
          <ScoreSection data-testid="anime-score">
            <ScoreWrapper>
              <ScoreTitle>
                Score
              </ScoreTitle>
              <Score>
                {anime.score}
              </Score>
            </ScoreWrapper>
            <ScoreWrapper>
              <ScoreTitle>
                Rank
              </ScoreTitle>
              <Score>
                {anime.rank}
              </Score>
            </ScoreWrapper>
            <ScoreWrapper>
              <ScoreTitle>
                Popularity
              </ScoreTitle>
              <Score>
                {anime.popularity}
              </Score>
            </ScoreWrapper>
            <ScoreWrapper>
              <ScoreTitle>
                Member
              </ScoreTitle>
              <Score>
                {anime.members}
              </Score>
            </ScoreWrapper>
          </ScoreSection>
          <SectionTitle>
            Synopsis
          </SectionTitle>
          <SectionDescription data-testid="anime-synopsis">
            {showMoreSynopsis ? animeSynopsis : `${animeSynopsis.substring(0,300)}...`}
            <ButtonShow
              data-testid="button-synopsis"
              onClick={() => {
                setShowMoreSynopsis(!showMoreSynopsis)
              }}
            >
              {showMoreSynopsis ? 'Show Less' : 'Show More'}
            </ButtonShow>
          </SectionDescription>
          <Divider/>
          <SectionTitle>
            Background
          </SectionTitle>
          <SectionDescription data-testid="anime-background">
          {showMoreBackground ? animeBackground : `${animeBackground.substring(0,300)}...`}
            <ButtonShow
              data-testid="button-background"
              onClick={() => {
                setShowMoreBackground(!showMoreBackground)
              }}
            >
              {showMoreBackground ? 'Show Less' : 'Show More'}
            </ButtonShow>
          </SectionDescription>
        </AnimeInfoWrapper>
      </Section>
    </>
  )
}
