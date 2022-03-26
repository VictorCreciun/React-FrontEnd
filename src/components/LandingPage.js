import React from "react";
import styled from "styled-components";
import bgImage from "../images/img3.jpg";

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
  opacity: 0.6;
  min-height: 100vh;
`;
const Container3 = styled.div`
  background-color: black;
  /* position: absolute; */
  opacity: 0.9;
  min-height: 100vh;
`;
const Banner = styled.div`
  position: absolute;
  left: 25%;
  top: 40%;
  z-index: 1;
`;
const Head = styled.p`
  font-size: 50px;
  color: seashell;
`;
const Desc = styled.p`
  font-size: 20px;
  color: seashell;
  margin-top: 20px;
`;

const LandingPage = () => {
  return (
    <div>
      <Banner>
        <Head> Let's Game It! </Head>
        <Desc>Get every single PC game that you want for a lower price</Desc>
      </Banner>
      <Container>
        <Container2>
          <Container3></Container3>
        </Container2>
      </Container>
    </div>
  );
};

export default LandingPage;
