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
`;
const ImageDiv = styled.div`
  height: 125px;
  width: 220px;
  padding: 10px;
`;
const ImagesContainer = styled.div`
  max-width: 600px;
  position: absolute;
  left: 45%;
  margin-top: 100px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
`;
const Images = styled.img`
  height: 125px;
  width: 220px;
  object-fit: cover;
`;
const Details = styled.div`
  position: absolute;
  display: flex;
  margin-left: 550px;
  margin-top: 425px;
  z-index: 1;
`;
const Sale = styled.div`
  color: #86dc3d;
  background-color: #495e35;
  display: flex;
  justify-content: right;
  margin-right: 20px;
  font-size: 25px;
  padding: 3px;
`;
const Price = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 3px;
  font-size: 25px;
  color: white;
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

  let content = null;

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
        if (slide.sale < 0) {
          content = (
            <Details>
              <Sale>{slide.sale}%</Sale>
              <Price>${slide.salePrice}</Price>
            </Details>
          );
        } else {
          content = (
            <Details>
              <Price>${slide.salePrice}</Price>
            </Details>
          );
        }
        return (
          <Wrapper key={index}>
            {index === current && (
              <Card>
                <Img src={slide.contentImage} />

                {slide.images && (
                  <ImagesContainer>
                    {slide.images.map((image) => (
                      <ImageDiv>
                        <Images src={image} />
                      </ImageDiv>
                    ))}
                  </ImagesContainer>
                )}
                {content}
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
