import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

const Total = styled.div`
  display: flex;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid grey;
  margin-left: 8vw;
  margin-bottom: 50px;
  margin-top: 50px;
  height: 50px;
  width: 500px;
`;

const Button = styled.button`
  margin-left: 20px;
  color: purple;
  background-color: coral;
  border-radius: 4px;
  margin-top: 50px;
  width: 100px;
  height: 50px;
`;

const TweetCreate = ({ setTweetFeed, tweetFeed }) => {
  const [search, setSearch] = React.useState("");
  const buttonCheck = search.length > 280 ? true : false;
  // const limitDiff = search.length;

  const enterTweet = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: search }),
  };

  const CharChange = styled.p``;

  function tweetContinue(param) {
    fetch("/api/tweet", enterTweet)
      .then((response) => response.json())
      .then((data) => {
        fetch("/api/me/home-feed")
          .then((res) => res.json())
          .then((data) => {
            setTweetFeed(data);
          })
          .catch((error) => window.location.replace("/error/404"));
      });
  }

  return (
    <Total>
      <Input
        type="text"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": {
              tweetContinue(search);
              return;
            }
          }
        }}
      />

      {280 - search.length > 150 ? (
        <Green>{280 - search.length}</Green>
      ) : 280 - search.length > 50 ? (
        <Yellow>{280 - search.length}</Yellow>
      ) : 280 - search.length >= 0 ? (
        <Red>{280 - search.length}</Red>
      ) : (
        <Red></Red>
      )}

      <Button
        disabled={search.length > 280}
        onClick={(ev) => tweetContinue(search)}
      >
        meow
      </Button>
    </Total>
  );
};

const Green = styled.div`
  color: green;
`;

const Yellow = styled.div`
  color: gold;
`;

const Red = styled.div`
  color: red;
`;

const NewColor = styled.div``;

export default TweetCreate;
