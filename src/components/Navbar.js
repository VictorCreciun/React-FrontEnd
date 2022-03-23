import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import MyImg from "../img/4Real.png";
import { Search } from "@material-ui/icons";
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
const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  /* color: white; */
  /* background-color: #131313; */
`;
const Wishlist = styled.button`
  cursor: pointer;
  padding-left: 25px;
  border: none;
  /* color: white; */
`;
// const WishList = styled.div`
//   cursor: pointer;
// `;
const AccountIcon = styled.div`
  cursor: pointer;
  padding-left: 25px;
  padding-top: 5px;
`;
const LogOut = styled.div`
  width: 60px;
  padding-left: 25px;
  padding-top: 7px;
  /* color: white; */
`;
const LogOutButt = styled.button`
  cursor: pointer;
  width: 60px;
  border: none;
  /* color: white; */
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
          {/* <Text padding="10px">Game Market</Text> */}
        </Left>
        <Center>
          {/* <AccountIcon>
                                <PersonIcon/>
                            </AccountIcon> */}
        </Center>
        <Right>
          <SearchContainer>
            <Input />
            <Search cursor="pointer" />
          </SearchContainer>

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
