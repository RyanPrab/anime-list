import { useRef } from 'react';
import Header from "../Header";
import styled from "styled-components";

const FixedContainer = styled.div.attrs(() => ({
  className: `absolute fixed top-0 inset-x-0`
}))`
  top: 0;
  z-index: 20;
`;

const PageContainer = styled.div.attrs(() => ({
  className: `bg-blue-500`
}))``;

export default function DefaultLayout(props) {
  const containerRef = useRef(null);
  const headerHeight = containerRef?.current?.clientHeight || 49;

  return (
    <>
      <FixedContainer>
        <Header/>
      </FixedContainer>
      <PageContainer style={{ paddingTop: `${headerHeight}px`}}>
        {props.children}
      </PageContainer>
    </>
  )

}
