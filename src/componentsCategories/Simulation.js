import React, { useContext } from "react";
import styled from "styled-components";
import { GamesContext } from "../contexts/GamesContext";

const Container = styled.div`
  padding: 20px;
  background-color: #2b2b2b;
`;
const PriceWrapper = styled.div`
  width: 170px;
  background-color: #383838;
`;
const Wrapper = styled.div``;
const WrapperReturn = styled.div`
  display: flex;
  margin: 25px;
  min-width: 170px;
  position: relative;
  left: 30px;
`;
const Image = styled.img`
  width: 170px;
  height: 220px;
  object-fit: cover;
`;
const Title = styled.div`
  color: white;
  font-size: 12px;
`;
const SalePrice = styled.p`
  color: white;
  font-size: 12px;
`;
const Info = styled.div`
  color: white;
  width: 500px;
  padding-left: 3%;
  padding-top: 5%;
`;

const Action = () => {
  const { games } = useContext(GamesContext);

  return (
    <Container>
      {games.map((item, itemIndex) => {
        let content = null;
        let info = null;

        if (item.category === "Simulation") {
          if (item.sale < 0) {
            content = (
              <PriceWrapper>
                <Image src={item.image} />
                <Title>{item.Title}</Title>
                <SalePrice>
                  {item.sale}% ${item.salePrice}
                </SalePrice>
              </PriceWrapper>
            );
          } else {
            content = (
              <PriceWrapper>
                <Image src={item.image} />
                <Title>{item.title}</Title>
                <SalePrice>${item.price}</SalePrice>
              </PriceWrapper>
            );
          }
        }

        if (item.category === "Simulation") {
          info = <Info>{item.description}</Info>;
        }

        return (
          <Wrapper>
            <WrapperReturn>
              {content}
              {info}
            </WrapperReturn>
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default Action;
