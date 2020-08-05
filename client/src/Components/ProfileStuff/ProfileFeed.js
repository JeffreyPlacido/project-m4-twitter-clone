import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { messageSquare } from "react-icons-kit/feather/messageSquare";
import { repeat } from "react-icons-kit/feather/repeat";
import { heart } from "react-icons-kit/feather/heart";
import { upload } from "react-icons-kit/feather/upload";
import ActionBar from "../Tweet/ActionBar";
import { useHistory } from "react-router-dom";

const ProfileFeed = (props) => {
  const history = useHistory();
  const tweetLink = "tweet/" + props.value.id;
  const picture = props.value.media;
  const catPhotos = picture.map((ele) => ele.url);

  function navigateTweet(e) {
    e.stopPropagation();
    history.push(`/tweet/${props.value.id}`);
  }
  function navigateProfile(e) {
    e.stopPropagation();
    history.push(`/${props.value.author.handle}`);
  }

  return (
    <Wrapper>
      <Header>
        <Avatar src={props.value.author.avatarSrc} />
        <Name>
          <DisplayName>{props.value.author.displayName}</DisplayName>
          <Username tabIndex="0" onClick={navigateProfile}>
            @{props.value.author.handle}
          </Username>
        </Name>
      </Header>
      <Clicker tabIndex="0" onClick={navigateTweet}>
        <TweetContents>{props.value.status}</TweetContents>
        <img src={catPhotos} />
      </Clicker>
      <Timestamp></Timestamp>
      <ActionBar value={props}></ActionBar>
      <Divider></Divider>
    </Wrapper>
  );
};
const Clicker = styled.div``;

const DivDiv = styled.div`
  display: flex;
`;

const ActionBarIcons = styled.button`
  display: block;
  margin-right: 20px;
  color: purple;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  &:active {
    color: inherit;
  }
`;

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;

const DisplayName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Header = styled.div`
  display: flex;
`;

const Divider = styled.div`
  border-top: solid 2 black;
  border-bottom: solid 2 black;
`;

const Wrapper = styled.div`
  background: white;
  width: 580px;
  margin-left: 250px;
  padding: 16px;
  text-align: left;
  border-bottom: solid 1px coral;
  a {
    text-decoration: none;
  }
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;
export default ProfileFeed;
