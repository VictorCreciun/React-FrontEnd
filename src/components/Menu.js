import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import styled from "styled-components";

const Section = styled.section`
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  width: 100%;
  z-index: 1;
`;
const MenuComp = styled.div``;
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
`;
const Menu = () => {
  return (
    <Section>
      <MenuComp></MenuComp>
      <SearchZone>
        <SearchContainer>
          <Input />
          <Search cursor="pointer" />
        </SearchContainer>
      </SearchZone>
    </Section>
  );
};

export default Menu;
