import React, { useContext } from "react";
import styled from "styled-components";
import { UsersContext } from "../contexts/UsersContext";

const Container = styled.div`
  position: absolute;
`;
const Wrapper = styled.div`
  position: relative;
  margin-top: 75px;
`;
const User = styled.div``;

const Wishlist = () => {
  const { users } = useContext(UsersContext);
  return (
    <Container>
      <Wrapper>
        {users.map((item) => (
          // <Game item={item} key={item._id} />
          <User>{item.name}</User>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Wishlist;
