import styled from "styled-components";
import React, { useState, useContext } from "react";
import { GamesContext } from "../contexts/GamesContext";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Container = styled.section`
  position: relative;
  padding-top: 700px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  position: absolute;
  width: 300px;
  height: 400px;
  object-fit: cover;
  margin-top: 50px;
  margin-left: 30px;
  z-index: 9;
`;
const Wrapper = styled.div``;
const Card = styled.div`
  height: 500px;
  width: 900px;
  /* border: 1px solid black; */
`;
const CardContainer = styled.div`
  position: relative;
  height: 500px;
  background-color: black;
  opacity: 0.5;
  width: 900px;
  /* background-color: #1c2e4a;
  opacity: 0.8; */
`;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const { games } = useContext(GamesContext);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current - 1);
  };

  return (
    <Container>
      <FaArrowAltCircleLeft
        style={{
          visibility: current === 0 ? "hidden" : "visible",
          position: "absolute",
          top: "70%",
          left: "20%",
          fontSize: "30px",
          color: "black",
          cursor: "pointer",
          zIndex: 10,
          userSelect: "none",
        }}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        style={{
          position: "absolute",
          top: "70%",
          right: "20%",
          fontSize: "30px",
          color: "black",
          cursor: "pointer",
          zIndex: 10,
          userSelect: "none",
        }}
        onClick={nextSlide}
      />
      {games.map((slide, index) => {
        return (
          <Wrapper key={index}>
            {index === current && (
              <Card>
                <Img src={slide.image} />
                <CardContainer></CardContainer>
              </Card>
            )}
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default Slider;
