import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import MyImg from "../img/4Real.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Container = styled.div`
  position: absolute;
  height: 75px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0.8;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Left = styled.div`
  position: relative;
  padding: 12px;
  display: flex;
  z-index: 1;
`;
const Img = styled.img`
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
`;
const Center = styled.div`
  padding: 22px;
`;
const Right = styled.div`
  padding: 22px;
  display: flex;
`;
const Wishlist = styled.button`
  cursor: pointer;
  padding-left: 25px;
  border: none;
  color: seashell;
  background: none;
`;
const Cart = styled.button`
  cursor: pointer;
  padding-left: 25px;
  border: none;
  color: seashell;
  background: none;
`;
const AccountIcon = styled.div`
  cursor: pointer;
  padding-left: 25px;
  padding-top: 5px;
  color: seashell;
`;
const LogOut = styled.div`
  width: 60px;
  padding-left: 25px;
  padding-top: 7px;
`;
const LogOutButt = styled.button`
  cursor: pointer;
  width: 60px;
  border: none;
  color: seashell;
  background: none;
`;
const P = styled.p`
  font-size: 12px;
`;
Img.defaultProps = {
  src: MyImg,
};

const Navbar = ({ handleLogOutClick, isAuthenticated }) => {
  let history = useHistory();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Img />
          </Link>
        </Left>
        <Center></Center>
        <Right>
          {!isAuthenticated ? (
            <AccountIcon
              onClick={() => {
                history.push("/login");
              }}
            >
              <PersonIcon />
            </AccountIcon>
          ) : null}

          {isAuthenticated ? (
            <LogOut>
              <LogOutButt
                onClick={() => {
                  handleLogOutClick();
                }}
              >
                <P>Log Out</P>
              </LogOutButt>
            </LogOut>
          ) : null}

          {/* Wishlist */}
          {isAuthenticated ? (
            <Wishlist
              onClick={() => {
                history.push("/wishlist");
              }}
            >
              <FavoriteBorderIcon />
            </Wishlist>
          ) : null}

          {/* Cart */}
          {isAuthenticated ? (
            <Cart
              onClick={() => {
                history.push("/cart");
              }}
            >
              <ShoppingCartIcon />
            </Cart>
          ) : null}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
