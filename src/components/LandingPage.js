import React from "react";
import styled from "styled-components";
import "../images/img1.jpg";

const Container = styled.div`
  min-height: 100vh;
  background-image: url("../images/img1.jpg");
  background-color: #cccccc;
`;

// Container.defaultProps = {
//   src: MyImg,
// };

const LandingPage = () => {
  return <Container></Container>;
};

export default LandingPage;
