import React from "react";
import styled from "styled-components";
import bgImage from "../images/img3.jpg";

const Container = styled.div`
  min-height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
`;
const Container2 = styled.div`
  background-color: rgba(255, 0, 100, 1);
  opacity: 0.6;
  min-height: 100vh;
`;
const Container3 = styled.div`
  background-color: black;
  opacity: 0.9;
  min-height: 100vh;
`;

// Container.defaultProps = {
//   src: bgImage,
// };

const LandingPage = () => {
  return (
    <Container>
      <Container2>
        <Container3></Container3>
      </Container2>
    </Container>
  );
};

export default LandingPage;
