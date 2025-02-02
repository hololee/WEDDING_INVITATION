import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  padding-bottom: 35px;
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Content data-aos="fade-in">
        장담하건대. 세상이 다 겨울이어도
        <br />
        우리 사랑은 늘봄처럼 따뜻하고
        <br />
        간혹, 여름처럼 뜨거울 겁니다
        <br />
        <br />
        - 이수동, (사랑가) -
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
