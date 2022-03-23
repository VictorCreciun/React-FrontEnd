import React from "react";
import styled from "styled-components";
import bgImage from "../images/img3.jpg";
import Navbar from "./Navbar";

const Container = styled.div`
  position: sticky;
  top: -50px;
  width: 100%;
  min-height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
`;
const Container2 = styled.div`
  background-color: rgba(255, 0, 100, 1);
  /* position: absolute; */
  opacity: 0.6;
  min-height: 100vh;
`;
const Container3 = styled.div`
  background-color: black;
  /* position: absolute; */
  opacity: 0.9;
  min-height: 100vh;
`;
const Head = styled.p`
  position: absolute;
`;

// Container.defaultProps = {
//   src: bgImage,
// };

const LandingPage = () => {
  return (
    <Container>
      {/* <Head> Let's Game It </Head> */}
      <Container2>
        <Container3>{/* <Navbar /> */}</Container3>
      </Container2>
    </Container>
  );
};

export default LandingPage;
