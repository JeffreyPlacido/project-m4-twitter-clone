import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { messageSquare } from "react-icons-kit/feather/messageSquare";
import { repeat } from "react-icons-kit/feather/repeat";
import { heart } from "react-icons-kit/feather/heart";
import { upload } from "react-icons-kit/feather/upload";

const SingleTweet = (props) => {
  console.log(props);
  const profLink = "/" + props.value.tweet.author.handle;
  return (
    <Wrapper>
      <Header>
        <Avatar src={props.value.tweet.author.avatarSrc} />
        <Name>
          <DisplayName>{props.value.tweet.author.displayName}</DisplayName>
          <a href={profLink}>
            <Username>@{props.value.tweet.author.handle}</Username>
          </a>
        </Name>
      </Header>
      <TweetContents>{props.value.tweet.status}</TweetContents>
      <Timestamp>{props.value.tweet.timestamp}</Timestamp>
      <DivDiv>
        <ActionBarIcons>
          <Icon icon={messageSquare} />
        </ActionBarIcons>
        <ActionBarIcons>
          <Icon icon={repeat} />
        </ActionBarIcons>
        <ActionBarIcons>
          <Icon icon={heart} />
        </ActionBarIcons>
        <ActionBarIcons>
          <Icon icon={upload} />
        </ActionBarIcons>
      </DivDiv>
      <Divider></Divider>
    </Wrapper>
  );
};

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
`;

const Header = styled.div``;

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
  border-bottom: 1px solid coral;
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
export default SingleTweet;
