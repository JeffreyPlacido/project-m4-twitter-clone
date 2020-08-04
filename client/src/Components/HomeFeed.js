import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import TweetStyles from "./Tweet/TweetStyles";
import TweetCreate from "./Tweet/TweetCreate";

const HomeFeedPage = styled.div`
  display: flex;
  align-items: top;
  height: 100vh;
  background: #eee;
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
      });
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
        <div>{status}</div>
      )}
    </>
  );
};
export default Homefeed;
