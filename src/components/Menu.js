import React, { useState, useContext } from "react";
import { Search } from "@material-ui/icons";
import styled from "styled-components";
import "./Menu.css";

const Section = styled.section`
  position: absolute;
  display: flex;
  justify-content: right;
  margin-top: 100px;
  width: 100%;
  z-index: 1;
`;
const SearchZone = styled.div`
  position: relative;
  margin-right: 75px;
`;
const SearchContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  padding: 5px;
  color: seashell;
`;
const Input = styled.input`
  border: none;
  background-color: seashell;
  margin-right: 5px;
  width: 250px;
  height: 25px;
  border-radius: 2px;
`;
// const Result = styled.div`
//   width: 100%;
//   height: 75px;
//   background-color: #dbe2e9;
// `;
// const ResultCard = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Image = styled.figure``;
// const Img = styled.img``;
// const H4 = styled.h4``;
// const Span = styled.span``;

const Menu = () => {
  return (
    <Section>
      <SearchZone>
        <SearchContainer>
          <Input />
          <Search cursor="pointer" />
        </SearchContainer>
        {/* <Result>
          <ResultCard>
            <Image>
              <Img src="" alt="game title" />
            </Image>
            <H4>Game Title</H4>
            <Span>Price</Span>
          </ResultCard>
        </Result> */}
      </SearchZone>
    </Section>
  );
};

export default Menu;
