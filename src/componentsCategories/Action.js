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
const Cards = styled.div`
  margin-top: 150px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  margin-top: 20px;
  z-index: 1;
  display: flex;
  min-width: 170px;
`;
const GameWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  padding: 20px 20px 20px 20px;
  background: rgba(0, 0, 0, 0.5);
`;
const ImgWrapper = styled.div`
  height: 250px;
  width: 200px;
`;
const Img = styled.img`
  height: 250px;
  width: 200px;
  object-fit: cover;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
`;
const Name = styled.div`
  font-size: 25px;
  color: white;
`;
const Description = styled.div`
  margin-top: 20px;
  font-size: 15px;
  color: white;
  max-width: 600px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  margin-left: 50px;
  margin-top: 40px;
  justify-content: space-between;
`;
const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  font-size: 20px;
  color: white;
  border: 1px white solid;
`;
const PriceWrapper = styled.div`
  margin-right: 30px;
  margin-top: 2px;
  display: flex;
`;
const Price = styled.div`
  color: white;
  font-size: 25px;
  margin-top: 5px;
`;
const Sale = styled.div`
  color: #86dc3d;
  font-size: 25px;
  background-color: #495e35;
  margin-right: 10px;
  height: 20px;
  padding: 3px;
  padding-bottom: 7px;
`;
const Cart = styled.button`
  width: 100px;
  font-size: 15px;
  padding: 4px;
  color: white;
  background-color: #0066cc;
  border: none;
  margin-top: 20px;
  cursor: pointer;
`;
const Entrance = styled.div``;
const H2 = styled.h2`
  color: white;
  font-size: 25px;
`;

const Action = () => {
  const { games } = useContext(GamesContext);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Container2>
          <Container3></Container3>
        </Container2>
      </Container>

      <Cards>
        <Entrance>
          <H2>Action Games</H2>
        </Entrance>
        {games.map((item, itemIndex) => {
          let content = null;

          if (item.category === "Action") {
            if (item.sale < 0) {
              content = (
                <GameWrapper key={itemIndex}>
                  <ImgWrapper>
                    <Img src={item.contentImage} />
                  </ImgWrapper>
                  <InfoWrapper>
                    <Name>{item.title}</Name>
                    <Description>{item.description}</Description>
                    <Details>
                      <Category>{item.category}</Category>
                      <PriceWrapper>
                        <Sale>{item.sale}%</Sale>
                        <Price>${item.salePrice}</Price>
                      </PriceWrapper>
                    </Details>
                    <Cart>Add to Cart</Cart>
                  </InfoWrapper>
                </GameWrapper>
              );
            } else {
              content = (
                <GameWrapper key={itemIndex}>
                  <ImgWrapper>
                    <Img src={item.contentImage} />
                  </ImgWrapper>
                  <InfoWrapper>
                    <Name>{item.title}</Name>
                    <Description>{item.description}</Description>
                    <Details>
                      <Category>{item.category}</Category>
                      <PriceWrapper>
                        <Price>${item.price}</Price>
                      </PriceWrapper>
                    </Details>
                    <Cart>Add to Cart</Cart>
                  </InfoWrapper>
                </GameWrapper>
              );
            }
          } else {
            return null;
          }

          // if (item.category === "First-Person") {
          //   info = <Info>{item.description}</Info>;
          // }

          return (
            <Wrapper>
              {content}
              {/* {info} */}
            </Wrapper>
          );
        })}
      </Cards>
    </div>
  );
};

export default Action;
