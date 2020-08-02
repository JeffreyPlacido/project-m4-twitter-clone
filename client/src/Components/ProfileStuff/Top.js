import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { calendar } from "react-icons-kit/feather/calendar";
import { mapPin } from "react-icons-kit/feather/mapPin";

const HeaderContainer = styled.div`
  margin-left: 250px;
  border-bottom: solid 2px black;
`;

const Banner = styled.img`
  z-index: 2;
`;

const Avatar = styled.div`
  z-index: 4;
`;

const FollowingButton = styled.button`
  width: 180px;
  height: 45px;
  padding: 10px 15px;
  border-radius: 30px;
  color: purple;
  font-weight: 700;
  font-size: 1.1rem;
  background: coral;
  cursor: pointer;
`;

const UserName = styled.h2`
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

const Handles = styled.div`
  padding: 10px;
  color: darkgray;
`;

const BestFriends = styled.div``;

const Setting = styled.div`
  display: flex;
`;

const Location = styled.div``;

const JoinDate = styled.div`
  color: darkgray;
`;

const Following = styled.div``;

const Followers = styled.div``;

const NavBarTML = styled.nav``;

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

const TopStuff = (props) => {
  return (
    <HeaderContainer>
      <Banner src={props.value.bannerSrc}></Banner>
      <Avatar src={props.value.avatarSrc}></Avatar>
      <FollowingButton>Follow</FollowingButton>
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
      <NavBarTML></NavBarTML>
      <div></div>
    </HeaderContainer>
  );
};

export default TopStuff;
