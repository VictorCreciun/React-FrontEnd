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
  padding-top: 100px;
  padding-bottom: 75px;
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
  font-size: 20px;
  font-weight: 750;
  margin-left: 35%;
  width: 120px;
  height: 35px;
  cursor: pointer;
`;

const RegisterComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetch("https://game-shop-4real.herokuapp.com/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
        console.log("res", res);
      })
      .then((data) => {
        console.log("data: ", data);
        return history.push("/login");
      });
    setFormData({ name: "", email: "", password: "" });
  };

  console.log(formData);

  return (
    <Container>
      <Wrapper>
        <SignInWrapper>
          <SignInTitle>Register</SignInTitle>
          <form onSubmit={onFormSubmit}>
            <Input
              value={formData.name}
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
            />
            <Input
              value={formData.email}
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <Input
              type="password"
              value={formData.password}
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />

            <ButtonSection>
              <Next type="submit" onClick={onFormSubmit}>
                Create
              </Next>
            </ButtonSection>
          </form>
        </SignInWrapper>
      </Wrapper>
    </Container>
  );
};

export default RegisterComp;
