// import { Container } from '@chakra-ui/layout';
import styled from "styled-components";
import React, { useState, useContext } from "react";
import { GamesContext } from "../contexts/GamesContext";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #2b2b2b;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.8;
`;
const Wrapper = styled.div`
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -55}vw);
  transition: 1s;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const InfoContainer = styled.div`
  display: flex;
  background-color: #383838;
  align-items: center;
`;
const Sale = styled.p`
  margin: 10px 0px;
  font-size: 15px;
  font-weight: 300;
  color: white;
`;
const Button = styled.button`
  position: relative;
  color: white;
  background-color: #3a3b3c;
  left: 30%;
`;
const CardContainer = styled.div`
  position: relative;
  display: flex;
  left: 80px;
`;
const Image = styled.img`
  height: 300px;
  width: 210px;
  object-fit: cover;
  display: flex;
  flex-direction: row;
`;
const Price = styled.div`
  position: relative;
  color: white;
  font-size: 15px;
  font-weight: 200;
  left: 7%;
`;
const SaleWrapper = styled.div`
  margin-left: 25px;
  width: 210px;
`;

const Slider = ({ slides }) => {
  // const [current, setCurrent] = useState(0);
  // const length = slides.length
  const { games } = useContext(GamesContext);

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {/* <ArrowLeftOutlined /> */}
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        <Slide>
          <CardContainer>
            {games.map((gameDetail, index) => {
              return (
                <SaleWrapper key={gameDetail._id}>
                  <Image src={gameDetail.image} />

                  <InfoContainer>
                    <Sale>{gameDetail.sale}%</Sale>
                    <Price>{gameDetail.salePrice}$</Price>
                    <Button>Get Now</Button>
                  </InfoContainer>
                </SaleWrapper>
              );
            })}
          </CardContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        {/* <ArrowRightOutlined /> */}
      </Arrow>
    </Container>
  );

  // return (
  //   <section>
  //     <FaArrowAltCircleLeft/>
  //     <FaArrowAltCircleRight/>
  //     {
  //       games.map((slide, index) => {
  //         return <img src={slide.image} />;
  //       })
  //   }
  //   </section>
  // )
};

export default Slider;
