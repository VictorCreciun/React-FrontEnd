import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2b2b2b;
`;
const Wrapper = styled.div`
  background-color: #2b2b2b;
  align-items: center;
  /* position: relative; */
  /* left: 24%; */
`;
const Adress = styled.a`
  color: #bfc0c0;
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;
  transition: all 1s ease-Out;
`;
const Circle = styled.div`
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #bfc0c0;
  position: absolute;
  transition: all 1s ease-Out;
  top: 20px;
  left: 70px;
`;
const Button = styled.button`
  align-items: center;
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #bfc0c0;
  margin: 20px 20px 20px 20px;
  color: #bfc0c0;
  background-color: #3a3b3c;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & div {
      width: 200%;
      height: 500%;
      opacity: 1;
      top: -70px;
      left: -70px;
    }
  }

  &:hover {
    & a {
      color: #2d3142;
    }
  }
`;

const Categories = () => {
  let history = useHistory();

  return (
    <Container>
      <Wrapper>
        <Button
          onClick={() => {
            history.push("/action");
          }}
        >
          <Circle></Circle>
          <Adress>Action</Adress>
        </Button>
        <Button
          onClick={() => {
            history.push("/first-person");
          }}
        >
          <Circle></Circle>
          <Adress>FPS</Adress>
        </Button>
        <Button
          onClick={() => {
            history.push("/sport");
          }}
        >
          <Circle></Circle>
          <Adress>Sport</Adress>
        </Button>
        <Button
          onClick={() => {
            history.push("/horror");
          }}
        >
          <Circle></Circle>
          <Adress>Horror</Adress>
        </Button>
        <Button
          onClick={() => {
            history.push("/shooter");
          }}
        >
          <Circle></Circle>
          <Adress>Shooter</Adress>
        </Button>
        <Button
          onClick={() => {
            history.push("/racing");
          }}
        >
          <Circle></Circle>
          <Adress>Racing</Adress>
        </Button>
        <Button
          onClick={() => {
            history.push("/simulation");
          }}
        >
          <Circle></Circle>
          <Adress>Simulation</Adress>
        </Button>
        <Button
          onClick={() => {
            history.push("/survival");
          }}
        >
          <Circle></Circle>
          <Adress>Survival</Adress>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Categories;
