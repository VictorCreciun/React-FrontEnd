import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import MyImg from "../img/4Real.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
// import Wishlist from "../pages/Wishlist";

const Container = styled.div`
  position: absolute;
  height: 75px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
  z-index: 1;
`;
const Wrapper = styled.div`
  // padding: 22px;
  /* color: white; */
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Left = styled.div`
  padding: 12px;
  display: flex;
`;
const Img = styled.img`
  height: 40px;
  cursor: pointer;
  margin-left: 10pxx;
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
// const WishList = styled.div`
//   cursor: pointer;
// `;
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
          <Img
            onClick={() => {
              history.push("/");
            }}
          />
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
              {/* <Badge badgeContent={4} color="primary"> */}
              <FavoriteBorderIcon />
              {/* </Badge> */}
            </Wishlist>
          ) : null}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
