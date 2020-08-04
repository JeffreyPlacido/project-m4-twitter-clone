import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid grey;
  margin: 5px;
`;

const Button = styled.button`
  color: purple;
  background-color: coral;
  padding: 8px;
  border-radius: 4px;
`;

const TweetCreate = ({ setTweetFeed, tweetFeed }) => {
  const [search, setSearch] = React.useState();
  const enterTweet = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: search }),
  };

  function tweetContinue(param) {
    fetch("/api/tweet", enterTweet)
      .then((response) => response.json())
      .then((data) => {
        fetch("/api/me/home-feed")
          .then((res) => res.json())
          .then((data) => {
            setTweetFeed(data);
          });
      });
  }

  return (
    <div>
      <Input
        type="text"
        search={search}
        onChange={(ev) => setSearch(ev.target.search)}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": {
              tweetContinue(search);
              return;
            }
          }
        }}
      />
      <Button onClick={() => tweetContinue(search)}>meow</Button>
    </div>
  );
};

export default TweetCreate;
