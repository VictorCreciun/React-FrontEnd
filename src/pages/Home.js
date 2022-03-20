import React, { useState, useContext /*useEffect*/ } from "react";
// import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
// import Categories from "../components/Categories";
import Games from "../components/Games";
import styled from "styled-components";
import Game from "../components/Game";
import { GamesContext } from "../contexts/GamesContext";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: #2b2b2b;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: #2b2b2b;
  justify-content: center;
`;
const Adress = styled.a`
  color: #bfc0c0;
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;
  transition: all 1s ease-Out;
`;
const Circle = styled.div`
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #bfc0c0;
  position: absolute;
  transition: all 1s ease-Out;
  top: 20px;
  left: 70px;
`;
const Button = styled.button`
  align-items: center;
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #bfc0c0;
  margin: 20px 20px 20px 20px;
  color: #bfc0c0;
  background-color: #3a3b3c;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & div {
      width: 200%;
      height: 500%;
      opacity: 1;
      top: -70px;
      left: -70px;
    }
  }

  &:hover {
    & a {
      color: #2d3142;
    }
  }
`;

const Home = () => {
  const categories = [
    "Action",
    "FPS",
    "Sport",
    "Horror",
    "Shooter",
    "Racing",
    "Simulation",
    "Survival",
  ];

  const [selectedCategory, setSelectedCategory] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);
  const { games } = useContext(GamesContext);

  const filterGames = (categ) => {
    setSelectedCategory(true);

    setFilteredGames(
      games.filter((game) => {
        return game.category === categ;
      })
    );
  };

  console.log("filteredGames", filteredGames);

  return (
    <div>
      <Slider />
      <Wrapper>
        {categories.map((category, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                filterGames(category);
              }}
            >
              <Circle></Circle>
              <Adress>{category}</Adress>
            </Button>
          );
        })}
      </Wrapper>
      {!selectedCategory ? (
        <Games />
      ) : (
        <Container>
          {filteredGames.map((game) => {
            return <Game item={game} key={game._id} />;
          })}
        </Container>
      )}
    </div>
  );
};

export default Home;
