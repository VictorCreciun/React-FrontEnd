import React, { useContext } from "react";
import styled from "styled-components";
import Game from "./Game";
import { GamesContext } from "../contexts/GamesContext";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: #2b2b2b;
`;

const Games = () => {
  const { games } = useContext(GamesContext);

  return (
    <Container>
      {games.map((item) => (
        <Game item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Games;
