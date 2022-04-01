import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [imageCompiler, setImageCompiler] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    contentImage: "",
    images: [],
    description: "",
    price: 0,
    sale: 0,
    salePrice: 0,
    category: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const addImages = () => {
    setFormData({
      ...formData,
      images: [...formData.images, imageCompiler],
    });
    setImageCompiler("");
  };

  console.log("formData.images", formData.images);

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetch("https://game-shop-4real.herokuapp.com/api/games", {
      method: "POST",
      body: JSON.stringify({
        title: formData.title,
        contentImage: formData.contentImage,
        images: formData.images,
        description: formData.description,
        price: formData.price,
        sale: formData.sale,
        salePrice: formData.salePrice,
        category: formData.category,
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
        return history.push("/admin");
      });
    setFormData({
      title: "",
      contentImage: "",
      images: [""],
      description: "",
      price: 0,
      sale: 0,
      salePrice: 0,
      category: "",
    });
  };

  return (
    <div>
      <Container>
        <form onSubmit={onFormSubmit}>
          <Wrapper>
            <WrapperElement>
              <Label>Title:</Label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </WrapperElement>

            <WrapperElement>
              <Label>Content Image:</Label>
              <Input
                type="text"
                name="contentImage"
                value={formData.contentImage}
                onChange={handleInputChange}
              />
            </WrapperElement>

            <WrapperElement>
              <Label>Image:</Label>
              <Input
                type="text"
                name="imageCompiler"
                value={imageCompiler}
                onChange={(event) => setImageCompiler(event.target.value)}
              />
              <button onClick={addImages}>Compile</button>
            </WrapperElement>

            <WrapperElement>
              <Label>Description:</Label>
              <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </WrapperElement>

            <WrapperElement>
              <Label>Price:</Label>
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </WrapperElement>

            <WrapperElement>
              <Label>Sale:</Label>
              <Input
                type="number"
                name="sale"
                value={formData.sale}
                onChange={handleInputChange}
              />
            </WrapperElement>

            <WrapperElement>
              <Label>Sale Price:</Label>
              <Input
                type="number"
                name="salePrice"
                value={formData.salePrice}
                onChange={handleInputChange}
                required
              />
            </WrapperElement>

            <WrapperElement>
              <Label>Category:</Label>
              <Input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </WrapperElement>
          </Wrapper>

          <div
            style={{
              display: "flex",
              justifyContent: "right",
              marginRight: "500px",
            }}
          >
            <Save type="submit">Save</Save>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Admin;
