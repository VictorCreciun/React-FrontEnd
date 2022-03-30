import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 200px;
`;
const Wrapper = styled.div`
  margin-left: 50px;
`;
const WrapperElement = styled.div`
  padding: 30px;
  display: flex;
`;
const Label = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  background-color: none;
  margin-right: 15px;
`;
const Input = styled.input``;
const Save = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  padding: 2px 24px;
  text-align: center;
`;

const Admin = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <WrapperElement>
            <Label>Title:</Label>
            <Input type="text" />
          </WrapperElement>

          <WrapperElement>
            <Label>Image Source:</Label>
            <Input type="text" />
          </WrapperElement>

          <WrapperElement>
            <Label>Description:</Label>
            <Input type="text" />
          </WrapperElement>

          <WrapperElement>
            <Label>Price:</Label>
            <Input type="number" />
          </WrapperElement>

          <WrapperElement>
            <Label>Sale:</Label>
            <Input type="number" />
          </WrapperElement>

          <WrapperElement>
            <Label>Sale Price:</Label>
            <Input type="number" />
          </WrapperElement>

          <WrapperElement>
            <Label>Category:</Label>
            <Input type="text" />
          </WrapperElement>
        </Wrapper>

        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginRight: "500px",
          }}
        >
          <Save>Save</Save>
        </div>
      </Container>
    </div>
  );
};

export default Admin;
