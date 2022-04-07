import React, { useContext } from "react";
import styled from "styled-components";
import { WishlistsContext } from "../contexts/WishlistsContext";

const Container = styled.div`
  position: absolute;
`;
const Wrapper = styled.div`
  position: relative;
  margin-top: 75px;
`;
const User = styled.div``;
const GameWrapper = styled.div``;
const ImgWrapper = styled.div``;
const Img = styled.img``;

const Wishlist = () => {
  const { wishlists } = useContext(WishlistsContext);

  return (
    <Container>
      <Wrapper>
        {wishlists.map((item) => (
          <User key={item._id}>
            {item.games.map((game, index) => (
              <GameWrapper key={index}>
                <ImgWrapper>
                  <Img src={game.contentImage} />
                </ImgWrapper>
              </GameWrapper>
            ))}
          </User>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Wishlist;
