import React from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather/bell";
import { user } from "react-icons-kit/feather/user";
import { home } from "react-icons-kit/feather/home";
import { bookmark } from "react-icons-kit/feather/bookmark";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const SideBarContainerMain = styled.nav`
  height: 100vh;
  width: 200px;
  margin-top: 50px;
  margin-left: 50px;
  float: left;
`;

const SideBarContainer = styled.div`
  position: absolute;
  svg {
    width: 30px;
    height: 30px;
    color: coral;
    padding: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  div {
    :hover {
      border-radius: 50px;
      background-color: lightblue;
      cursor: pointer;
    }
  }
`;

const CatLogo = styled.div`
  margin-bottom: 30px;
`;

const MeowButton = styled.button`
  border-radius: 50px;
  border: none;
  background-color: coral;
  color: darkviolet;
  width: 150px;
  height: 35px;
  margin-left: 15px;
  margin-top: 20px;
  font-size: 18px;
`;

const SideBar = () => {
  return (
    <SideBarContainerMain>
      <CatLogo>
        <Logo />
      </CatLogo>
      <SideBarContainer>
        <div>
          <Icon icon={home} />
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "purple",
            }}
          >
            Home
          </NavLink>
        </div>
        <div>
          <Icon icon={user} />
          <NavLink
            exact
            to="/treasurymog"
            activeStyle={{
              fontWeight: "bold",
              color: "purple",
            }}
          >
            User
          </NavLink>
        </div>
        <div>
          <Icon icon={bell} />
          <NavLink
            to="/notifications"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "purple",
            }}
          >
            Notifications
          </NavLink>
        </div>
        <div>
          <Icon icon={bookmark} />
          <NavLink
            to="/bookmarks"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "purple",
            }}
          >
            Bookmarks
          </NavLink>
        </div>
        <MeowButton>Meow</MeowButton>
      </SideBarContainer>
    </SideBarContainerMain>
  );
};

export default SideBar;
