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
`;

const Game = ({ item }) => {
  //   let content = null;

  //   if (item.sale < 0) {
  //     content = (
  //       <InfoWrapper>
  //         <Title>{item.title}</Title>
  //         <Sale_Price>
  //           {item.sale}% ${item.salePrice}
  //         </Sale_Price>
  //       </InfoWrapper>
  //     );
  //   } else {
  //     content = (
  //       <InfoWrapper>
  //         <Title>{item.title}</Title>
  //         <Sale_Price>${item.price}</Sale_Price>
  //       </InfoWrapper>
  //     );
  //   }

  return (
    <Container>
      <Wrapper>
        <Image src={item.image} />
      </Wrapper>
      <InfoWrapper>
        <Title>{item.title}</Title>
        <SalePrice>${item.price}</SalePrice>
      </InfoWrapper>
    </Container>
  );
};

export default Game;
