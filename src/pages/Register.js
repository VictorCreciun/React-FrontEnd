import React from "react";
import RegisterComp from "../components/RegisterComp";
import styled from "styled-components";
import bgImage from "../images/img4.jpg";

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
  /* position: absolute; */
  opacity: 0.7;
  min-height: 100vh;
`;

const Register = () => {
  return (
    <div>
      <Container>
        <Container2>
          <Container3></Container3>
        </Container2>
      </Container>
      <RegisterComp />
    </div>
  );
};

export default Register;
