import React, { useContext } from "react";
import styled from "styled-components";
import { GamesContext } from "../contexts/GamesContext";
import bgImage from "../images/img5.jpg";

const Container = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 1;
`;
const Container2 = styled.div`
  background-color: rgba(255, 0, 100, 1);
  opacity: 0.5;
  min-height: 100vh;
`;
const Container3 = styled.div`
  background-color: black;
  opacity: 0.85;
  min-height: 100vh;
`;
const PriceWrapper = styled.div`
  width: 170px;
  background-color: #383838;
`;
const Wrapper = styled.div`
  position: relative;
  padding-top: 10px;
  margin-left: 40px;
  z-index: 1;
  display: flex;
  min-width: 170px;
`;
// const WrapperReturn = styled.div``;
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
    <div>
      <Container>
        <Container2>
          <Container3></Container3>
        </Container2>
      </Container>
      {games.map((item, itemIndex) => {
        let content = null;
        let info = null;

        if (item.category === "Shooter") {
          if (item.sale < 0) {
            content = (
              <PriceWrapper key={item._id}>
                <Image src={item.contentImage} />
                <Title>{item.title}</Title>
                <SalePrice>
                  {item.sale}% ${item.salePrice}
                </SalePrice>
              </PriceWrapper>
            );
          } else {
            content = (
              <PriceWrapper key={item._id}>
                <Image src={item.contentImage} />
                <Title>{item.title}</Title>
                <SalePrice>${item.price}</SalePrice>
              </PriceWrapper>
            );
          }
        }

        if (item.category === "Shooter") {
          info = <Info>{item.description}</Info>;
        }

        return (
          <Wrapper>
            {/* <WrapperReturn> */}
            {content}
            {info}
            {/* </WrapperReturn> */}
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Action;
