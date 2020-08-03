import React, { createContext, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleTweet from "./Tweet/SingleTweet";

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
      });
  }, []);

  return (
    <>
      {TweetStatus === "idle" ? (
        <SingleTweet value={Tweet}></SingleTweet>
      ) : (
        <div>{TweetStatus}</div>
      )}
    </>
  );
};

export default IndividualTweetPage;
