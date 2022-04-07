import React, { useState, useContext } from "react";
import { Search } from "@material-ui/icons";
import styled from "styled-components";
import { GamesContext } from "../contexts/GamesContext";

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
const Result = styled.div``;
const ResultCard = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  background-color: #dbe2e9;
`;
const Image = styled.figure`
  background: none;
`;
const Img = styled.img`
  height: 175px;
  width: 140px;
  object-fit: cover;
`;
const H4 = styled.p`
  margin-left: 30px;
`;
const Price = styled.div`
  margin-top: 140px;
  margin-right: 10px;
`;
const Sale = styled.div`
  color: #86dc3d;
  background-color: #495e35;
  margin-top: 137px;
  margin-right: 10px;
  height: 20px;
  padding: 3px;
`;
const X = styled.button`
  border: none;
  background: none;
  position: relative;
  right: 12%;
  cursor: pointer;
`;

const Menu = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  console.log("searchInput: ", searchInput);

  const { games } = useContext(GamesContext);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    setFilteredGames(
      games.filter((game) => {
        return game.title.includes(searchInput);
      })
    );
  };

  return (
    <Section>
      <SearchZone>
        <SearchContainer>
          <Input value={searchInput} type="text" onChange={handleInputChange} />
          <X
            onClick={() => {
              setSearchInput("");
              setFilteredGames([]);
            }}
          >
            X
          </X>
        </SearchContainer>
        {filteredGames && filteredGames.length >= 0 ? (
          <Result>
            {filteredGames.map((game) => {
              if (game.sale < 0) {
                return (
                  <ResultCard key={game._id}>
                    <Image>
                      <Img src={game.contentImage} />
                    </Image>
                    <H4>{game.title}</H4>
                    <Sale>{game.sale}%</Sale>
                    <Price>${game.salePrice}</Price>
                  </ResultCard>
                );
              } else {
                return (
                  <ResultCard key={game._id}>
                    <Image>
                      <Img src={game.contentImage} />
                    </Image>
                    <H4>{game.title}</H4>
                    <Price>${game.price}</Price>
                  </ResultCard>
                );
              }
            })}
          </Result>
        ) : null}
      </SearchZone>
    </Section>
  );
};

export default Menu;
