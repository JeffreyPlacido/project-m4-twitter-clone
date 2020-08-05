import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import TweetStyles from "./Tweet/TweetStyles";
import TweetCreate from "./Tweet/TweetCreate";

const HomeFeedPage = styled.div`
  display: flex;
  align-items: top;
  height: 100vh;
  background: #eee;
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const Homefeed = () => {
  const [tweetFeed, setTweetFeed] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setTweetFeed(data);
        setStatus("Feed");
      })
      .catch((error) => window.location.replace("/error/404"));
  }, []);
  return (
    <>
      {status === "Feed" ? (
        <>
          <TweetCreate
            tweetFeed={tweetFeed}
            setTweetFeed={setTweetFeed}
          ></TweetCreate>
          {tweetFeed.tweetIds.map((Feed) => {
            let Tweet = tweetFeed.tweetsById[Feed];
            console.log(Tweet);
            return <TweetStyles value={Tweet} />;
          })}
        </>
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
export default Homefeed;

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
