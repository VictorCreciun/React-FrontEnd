import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GamesContext } from "../contexts/GamesContext";
import { Link } from "react-router-dom";
import "./Menu.css";

const Section = styled.section`
  position: absolute;
  display: flex;
  justify-content: space-between;
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
const MenuWrapper = styled.ul`
  margin-left: 100px;
  display: flex;
`;
const Home = styled.li`
  margin-left: 100px;
  list-style-type: none;
`;
const Categories = styled.li`
  margin-left: 100px;
  list-style-type: none;
`;
const Button = styled.button`
  font-size: 20px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
`;
const Dropdown = styled.div`
  position: relative;
  right: 35px;
  top: 10px;
`;
const Elements = styled.li`
  background: #dbe2e9;
  cursor: pointer;
`;
const Item = styled.div`
  display: block;
  max-width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: 17px;
  color: black;
  padding: 10px;
  &:hover {
    background: #adb4ba;
  }
`;

const Menu = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [dropDown, setDropdown] = useState(true);

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
      <MenuWrapper>
        <Home>
          <Button>Home</Button>
        </Home>
        <Categories
          onMouseEnter={() => setDropdown(false)}
          onMouseLeave={() => setDropdown(true)}
        >
          <Button>Categories</Button>
          {!dropDown && (
            <Dropdown>
              <ul
                style={{
                  maxWidth: "150px",
                  position: "relative",
                  listStyle: "none",
                  textAlign: "start",
                }}
                className={dropDown ? "dropdown clicked" : "dropdown"}
                onClick={() => setDropdown(!dropDown)}
              >
                <Elements>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/action"
                  >
                    <Item onClick={() => setDropdown(false)}>Action</Item>
                  </Link>
                </Elements>
                <Elements>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/first-person"
                  >
                    <Item onClick={() => setDropdown(false)}>First-Person</Item>
                  </Link>
                </Elements>
                <Elements>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/sport"
                  >
                    <Item onClick={() => setDropdown(false)}>Sport</Item>
                  </Link>
                </Elements>
                <Elements>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/horror"
                  >
                    <Item onClick={() => setDropdown(false)}>Horror</Item>
                  </Link>
                </Elements>
                <Elements>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/shooter"
                  >
                    <Item onClick={() => setDropdown(false)}>Shooter</Item>
                  </Link>
                </Elements>
                <Elements>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/racing"
                  >
                    <Item onClick={() => setDropdown(false)}> Racing</Item>
                  </Link>
                </Elements>
                <Elements>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/simulation"
                  >
                    <Item onClick={() => setDropdown(false)}>Simulation</Item>
                  </Link>
                </Elements>
                <Elements>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/survival"
                  >
                    <Item onClick={() => setDropdown(false)}>Survival</Item>
                  </Link>
                </Elements>
              </ul>
            </Dropdown>
          )}
        </Categories>
      </MenuWrapper>

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
