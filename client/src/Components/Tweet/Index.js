import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../Tweet/Header";
import { TweetContext } from "../Tweet/TweetContext";
import ActionBar from "../Tweet/ActionBar";

const Tweet = () => {
  const { tweetContents, date } = useContext(TweetContext);

  return (
    <Wrapper>
      <Header></Header>
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider></Divider>
      <ActionBar></ActionBar>
    </Wrapper>
  );
};

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

export default Tweet;
