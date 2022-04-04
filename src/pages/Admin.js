import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { GamesContext } from "../contexts/GamesContext";

const Container = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-wrap: wrap;
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
const ButtonContainer = styled.div`
  position: absolute;
`;
const Edit = styled.button``;
const Delete = styled.button``;

const Admin = () => {
  const { games } = useContext(GamesContext);

  const history = useHistory();

  const deleteGame = () => {};

  return (
    <div>
      <Container>
        {games.map((item) => (
          <Wrapper>
            <ButtonContainer>
              <Edit onClick={() => history.push(`/admin/edit/${item._id}`)}>
                Edit
              </Edit>
              <Delete onClick={deleteGame(item._id)}>Delete</Delete>
            </ButtonContainer>

            <Image src={item.contentImage} />
          </Wrapper>
        ))}
      </Container>
    </div>
  );
};

export default Admin;
