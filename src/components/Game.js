import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./Game.css";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  position: relative;
  margin: 25px;
  left: 30px;
  cursor: pointer;
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
  /* left: 15.75%; */
  bottom: 6%;
  margin-top: -30px;
`;
const Hover = styled.div`
  position: absolute;
  background-color: #dbe2e9;
  width: 300px;
  margin-left: 355px;
  margin-top: 25px;
  z-index: 1;
  transition: 1s ease;
`;
const HoverName = styled.div`
  margin: 10px 0 0 50px;
  display: flex;
  justify-content: left;
  margin-top: 10px;
`;
const HoverWrapper = styled.div`
  position: relative;
  max-width: 300px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
`;
const HoverImg = styled.img`
  width: 250px;
  height: 225px;
  object-fit: cover;
`;
const HoverCateg = styled.div`
  margin: 10px 0 0 50px;
  display: flex;
  justify-content: left;
`;
const HoverDetails = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px 10px 10px 0;
`;
const HoverSale = styled.div`
  color: #86dc3d;
  background-color: #495e35;
  display: flex;
  justify-content: right;
  margin-right: 20px;
  padding: 3px;
`;
const HoverPrice = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 3px;
`;

const Game = ({ item }) => {
  const [hoverDetails, setHoverDetails] = useState(false);

  let content = null;
  let hoverContent = null;

  if (item.sale < 0) {
    content = (
      <InfoWrapper>
        <Title>{item.title}</Title>
        <SalePrice>
          {item.sale}% ${item.salePrice}
        </SalePrice>
      </InfoWrapper>
    );
    hoverContent = (
      <HoverDetails>
        <HoverSale>{item.sale}%</HoverSale>
        <HoverPrice>${item.salePrice}</HoverPrice>
      </HoverDetails>
    );
  } else {
    content = (
      <InfoWrapper>
        <Title>{item.title}</Title>
        <SalePrice>${item.price}</SalePrice>
      </InfoWrapper>
    );
    hoverContent = (
      <HoverDetails>
        <HoverPrice>${item.salePrice}</HoverPrice>
      </HoverDetails>
    );
  }

  return (
    <Container>
      <div>
        <Wrapper
          className="wrapper"
          onMouseOver={() => {
            setHoverDetails(true);
          }}
          onMouseOut={() => {
            setHoverDetails(false);
          }}
        >
          <Image src={item.contentImage} />
        </Wrapper>
      </div>

      {hoverDetails && (
        <Hover>
          <HoverName>{item.title}</HoverName>
          <div
            className="globalHover"
            style={{ display: "flex", overflow: "hidden", marginLeft: "20px" }}
          >
            {item.images.map((image) => (
              <HoverWrapper className="hoverWrapper">
                <HoverImg src={image} className="hoverImg" />
              </HoverWrapper>
            ))}
          </div>

          <HoverCateg>Category: {item.category}</HoverCateg>

          {hoverContent}
        </Hover>
      )}
    </Container>
  );
};

export default Game;
