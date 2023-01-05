import Header from "../Header";
import styled from "styled-components";

const FixedContainer = styled.div.attrs(() => ({
  className: `absolute fixed top-0 inset-x-0`
}))`
  top: 0;
  z-index: 20;
`;

const PageContainer = styled.div.attrs(() => ({
  className: `bg-blue-500 min-h-screen`
}))``;

export default function DefaultLayout(props) {

  return (
    <>
      <FixedContainer>
        <Header/>
      </FixedContainer>
      <PageContainer style={{ paddingTop: `26px`}}>
        {props.children}
      </PageContainer>
    </>
  )

}
