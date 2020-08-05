import React, { createContext, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleTweet from "./Tweet/SingleTweet";
import styled, { keyframes } from "styled-components";

const IndividualTweetPage = () => {
  const [Tweet, setTweet] = React.useState(null);
  const [TweetStatus, setTweetStatus] = React.useState("loading");

  const { tweetId } = useParams();

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((response) => response.json())
      .then((data) => {
        setTweet(data);
        setTweetStatus("idle");
      })
      .catch((error) => window.location.replace("/error/404"));
  }, []);

  return (
    <>
      {TweetStatus === "idle" ? (
        <SingleTweet value={Tweet}></SingleTweet>
      ) : (
        <>
          <LoadingWrapper
            src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-3.gif"
            class="rotate"
          />
          <Msg>Loading please wait</Msg>
        </>
      )}
    </>
  );
};

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const Msg = styled.div`
  margin-top: 150px;
  margin-left: 450px;
`;

const LoadingWrapper = styled.img`
  animation: ${rotate} 2s infinite linear;
  width: 100;
  height: 100;
  margin-top: 200;
  margin-left: 200px;
`;

export default IndividualTweetPage;
