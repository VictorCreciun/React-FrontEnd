import React from "react";
import styled from "styled-components";
import { Data } from "../data";

const Container = styled.div`
  padding: 20px;
  background-color: #2b2b2b;
`;

const PriceWrapper = styled.div`
  width: 170px;
  background-color: #383838;
  /* position: relative;
    left: 15.75%;
    bottom: 5%; */
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

const FirstPerson = () => {
  return (
    <Container>
      {Data.map((item, itemIndex) => {
        let content = null;
        let info = null;

        if (
          item.Category === "First-Person" ||
          item.Category2 === "First-Person"
        ) {
          if (item.Sale < 0) {
            content = (
              <PriceWrapper>
                <Image src={item.Img} />
                <Title>{item.Title}</Title>
                <SalePrice>
                  {item.Sale}% ${item.SalePrice}
                </SalePrice>
              </PriceWrapper>
            );
          } else {
            content = (
              <PriceWrapper>
                <Image src={item.Img} />
                <Title>{item.Title}</Title>
                <SalePrice>${item.Price}</SalePrice>
              </PriceWrapper>
            );
          }
        }

        if (
          item.Category === "First-Person" ||
          item.Category2 === "First-Person"
        ) {
          info = <Info>{item.Desc}</Info>;
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

export default FirstPerson;
