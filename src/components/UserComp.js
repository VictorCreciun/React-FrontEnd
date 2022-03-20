import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2b2b2b;
`;
const Wrapper = styled.div`
  background-color: #2b2b2b;
  align-items: center;
  padding: 50px;
  padding-top: 140px;
  padding-bottom: 140px;
`;
const SignInWrapper = styled.div`
  padding: 75px;
  margin-left: 35%;
  align-items: center;
  justify-content: center;
  width: 400px;
  border: 1px solid white;
  border-radius: 15px;
`;
const SignInTitle = styled.p`
  margin-left: 37%;
  color: white;
  font-size: 30px;
`;
const Input = styled.input`
  margin: 50px;
  margin-left: 7%;
  color: black;
  font-size: 20px;
  height: 40px;
  /* background-color: white; */
  width: 350px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  border-radius: 3px;
`;
const ButtonSection = styled.div`
  display: flex;
  margin-left: 7%;
`;
const Next = styled.button`
  font-size: 15px;
  font-weight: 700;
  margin-left: 42%;
  width: 75px;
  height: 25px;
  cursor: pointer;
`;
const NewAcc = styled.a`
  font-size: 20px;
  color: white;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
`;

const UserComp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetch("https://game-shop-4real.herokuapp.com/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        console.log("res", res);
      })
      .then((data) => {
        console.log("data: ", data);
        localStorage.setItem("token", data.token);
        // setIsAuthenticated(true);
      });
    setFormData({ email: "", password: "" });
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <SignInWrapper>
          <SignInTitle>Sign In</SignInTitle>
          <form onSubmit={onFormSubmit}>
            <Input
              value={formData.email}
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <Input
              value={formData.password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />

            <ButtonSection>
              <NewAcc href="/register">Create Account</NewAcc>
              <Next onClick={onFormSubmit}>Next</Next>
            </ButtonSection>
          </form>
        </SignInWrapper>
      </Wrapper>
    </Container>
  );
};

export default UserComp;
