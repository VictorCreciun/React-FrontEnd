import React, { useState, useContext } from "react";
import { Search } from "@material-ui/icons";
import styled from "styled-components";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { IconContext } from "react-icons";
// import { GamesContext } from "../contexts/GamesContext";
import "./Menu.css";

const Section = styled.section`
  position: absolute;
  display: flex;
  justify-content: right;
  margin-top: 100px;
  width: 100%;
  z-index: 1;
`;
// const MenuComp = styled.div``;
// const A = styled.a`
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 25px;
//   width: 95%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   padding: 0 16px;
//   border-radius: 4px;
// `;
const SearchZone = styled.div`
  position: relative;
  margin-right: 75px;
`;
const SearchContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  padding: 5px;
  color: seashell;
`;
const Input = styled.input`
  border: none;
  background-color: seashell;
  margin-right: 5px;
`;
const Menu = () => {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);
  // const { games } = useContext(GamesContext);

  return (
    <Section>
      {/* <MenuComp>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <A className="menu-bars">
              <FaIcons.FaBars
                onClick={showSidebar}
                style={{ marginLeft: "-100px", marginTop: "40px" }}
              />
            </A>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <A className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </A>
              </li>
              <li>
                <A href="/action">Action</A>
              </li>
              <li>
                <A href="/first-person">First-Person</A>
              </li>
              <li>
                <A href="/sport">Sport</A>
              </li>
              <li>
                <A href="/horror">Horror</A>
              </li>
              <li>
                <A href="/shooter">Shooter</A>
              </li>
              <li>
                <A href="/racing">Racing</A>
              </li>
              <li>
                <A href="/simulation">Simulation</A>
              </li>
              <li>
                <A href="/survival">Survival</A>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </MenuComp> */}
      <SearchZone>
        <SearchContainer>
          <Input />
          <Search cursor="pointer" />
        </SearchContainer>
      </SearchZone>
    </Section>
  );
};

export default Menu;
