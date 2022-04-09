import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import bgImage from "../images/img6.jpg";

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
  opacity: 0.7;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  position: absolute;
  margin-top: 75px;
  z-index: 9;
  left: 25%;
`;
const User = styled.div``;
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

const Cart = () => {
  const { cart } = useContext(CartContext);

  const authUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  console.log("cart: ", cart);

  return (
    <div>
      <Container>
        <Container2>
          <Container3></Container3>
        </Container2>
      </Container>

      <Wrapper>
        {cart.map((item, index) => {
          return (
            <div key={index}>
              {authUser.cartCode === item.user.cartCode ? (
                <User key={item._id}>
                  {item.games.map((game, index) => {
                    if (game.sale < 0) {
                      return (
                        <GameWrapper key={index}>
                          <ImgWrapper>
                            <Img src={game.contentImage} />
                          </ImgWrapper>
                          <InfoWrapper>
                            <Name>{game.title}</Name>
                            <Description>{game.description}</Description>
                            <Details>
                              <Category>{game.category}</Category>
                              <PriceWrapper>
                                <Sale>{game.sale}%</Sale>
                                <Price>${game.salePrice}</Price>
                              </PriceWrapper>
                            </Details>
                          </InfoWrapper>
                        </GameWrapper>
                      );
                    } else {
                      return (
                        <GameWrapper key={index}>
                          <ImgWrapper>
                            <Img src={game.contentImage} />
                          </ImgWrapper>
                          <InfoWrapper>
                            <Name>{game.title}</Name>
                            <Description>{game.description}</Description>
                            <Details>
                              <Category>{game.category}</Category>
                              <PriceWrapper>
                                <Price>${game.price}</Price>
                              </PriceWrapper>
                            </Details>
                          </InfoWrapper>
                        </GameWrapper>
                      );
                    }
                  })}
                </User>
              ) : null}
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Cart;

{
  /* // {wishlist.map((item) => {
//           return item.games.map((game) => {
//             return <div>{game.title}</div>;
//           });
//         })} */
}
