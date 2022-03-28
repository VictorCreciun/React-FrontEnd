import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  flex: 1;
  margin: 25px;
  min-width: 300px;
  position: relative;
  left: 30px;
`;
const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;
const Title = styled.div`
  color: white;
`;
const SalePrice = styled.p`
  color: white;
`;
const InfoWrapper = styled.div`
  width: 300px;
  background-color: #783937ff;
  position: relative;
  left: 15.75%;
  bottom: 6%;
  margin-top: -30px;
`;
const Hover = styled.div`
  position: absolute;
`;
const HoverName = styled.div``;

const Game = ({ item }) => {
  let content = null;

  if (item.sale < 0) {
    content = (
      <InfoWrapper>
        <Title>{item.title}</Title>
        <SalePrice>
          {item.sale}% ${item.salePrice}
        </SalePrice>
      </InfoWrapper>
    );
  } else {
    content = (
      <InfoWrapper>
        <Title>{item.title}</Title>
        <SalePrice>${item.price}</SalePrice>
      </InfoWrapper>
    );
  }

  return (
    <Container>
      <div>
        <Wrapper>
          <Image src={item.image} />
        </Wrapper>

        <InfoWrapper>
          <Title>{item.title}</Title>
          <SalePrice>${item.price}</SalePrice>
        </InfoWrapper>
      </div>
      <Hover>
        <HoverName>{item.title}</HoverName>
      </Hover>
    </Container>
  );
};

export default Game;
