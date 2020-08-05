import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { calendar } from "react-icons-kit/feather/calendar";
import { mapPin } from "react-icons-kit/feather/mapPin";

const HeaderContainer = styled.div`
  margin-left: 250px;
  a {
    text-decoration: none;
  }
`;

const Banner = styled.img`
  width: 1000px;
  z-index: 2;
`;

const Avatar = styled.img`
  z-index: 4;
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  border: 6px solid white;
  margin-left: 20px;
  margin-right: 1050px;
  transform: translate(40px, -120px);
`;

// const FollowingButton = styled.button`
//   width: 180px;
//   height: 45px;
//   padding: 10px 15px;
//   border-radius: 30px;
//   color: purple;
//   font-weight: 700;
//   font-size: 1.1rem;
//   background: coral;
//   cursor: pointer;
//   float: right;
//   margin-top: 20px;
//   margin-right: 450px;
// `;

const UserName = styled.h2`
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

const Handles = styled.div`
  color: darkgray;
  padding-bottom: 10px;
`;

const BestFriends = styled.div``;

const Setting = styled.div`
  display: flex;
  color: darkgray;
`;

const Location = styled.div`
  margin-right: 10px;
`;

const JoinDate = styled.div`
  color: darkgray;
`;

const Following = styled.div``;

const Followers = styled.div``;

const NavBarTML = styled.nav`
  margin-top: 18px;
  margin-right: 600px;
  margin-bottom: 18px;
`;

const Follow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  padding-top: 10px;
  color: darkgray;
  span {
    color: black;
    font-weight: 700;
  }
`;

const Fix = styled.div`
  margin-top: -120px;
`;

const TopStuff = (props) => {
  return (
    <HeaderContainer>
      <Banner src={props.value.bannerSrc}></Banner>
      <Avatar src={props.value.avatarSrc}></Avatar>
      {/* <FollowingButton>Follow</FollowingButton> */}
      <Fix>
        <UserName>{props.value.displayName}</UserName>
        <Handles>@{props.value.handle}</Handles>
        <BestFriends></BestFriends>
        <Setting>
          <Location>
            <Icon icon={mapPin} />
            {props.value.location}
          </Location>
          <JoinDate>
            <Icon icon={calendar} /> Joined {props.value.joined}
          </JoinDate>
        </Setting>
        <Follow>
          <Following>
            <span>{props.value.numFollowers}</span> Following
          </Following>
          <Followers>
            <span>{props.value.numFollowing}</span> Followers
          </Followers>
        </Follow>
      </Fix>
      <NavBarTML></NavBarTML>
    </HeaderContainer>
  );
};

export default TopStuff;
