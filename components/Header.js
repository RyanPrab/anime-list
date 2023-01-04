import styled from "styled-components";

const HeaderContainer = styled.div.attrs(() => ({
  className: `p-3 mx-auto border-b flex justify-center`
}))``;

const Container = styled.div.attrs(() => ({
  className: `container text-white font-semibold flex flex-row items-center flex-1 flex-shrink-0 w-full space-x-4`
}))`
  min-height: 66px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        Get Anime Recomendation Here
      </Container>
    </HeaderContainer>
  )
}
