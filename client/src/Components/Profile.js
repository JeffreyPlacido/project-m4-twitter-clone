import React, { createContext, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TopStuff from "./ProfileStuff/Top";
import ProfileFeed from "./ProfileStuff/ProfileFeed";

function Profile() {
  const [profUser, setProfUser] = React.useState(null);
  const [profStatus, setProfStatus] = React.useState("loading");
  const [profFeed, setProfFeed] = React.useState(null);
  const [feedStatus, setFeedStatus] = React.useState("loading");

  const { handle } = useParams();
  const nameHandle = handle.toString();
  console.log(profFeed);
  console.log(feedStatus);
  useEffect(() => {
    fetch(`/api/${nameHandle}/profile`)
      .then((response) => response.json())
      .then((data) => {
        const dataInfo = data.profile;
        setProfUser(dataInfo);
        setProfStatus("idle");
      });
  }, []);

  useEffect(() => {
    fetch(`/api/${nameHandle}/feed`)
      .then((response) => response.json())
      .then((data) => {
        setProfFeed(data);
        setFeedStatus("idle");
      });
  }, []);

  return (
    <>
      {profStatus === "idle" && feedStatus === "idle" ? (
        <>
          <TopStuff value={profUser}></TopStuff>
          {profFeed.tweetIds.map((Feed) => {
            let Tweet = profFeed.tweetsById[Feed];
            return <ProfileFeed value={Tweet} />;
          })}
        </>
      ) : (
        <div>{profStatus}</div>
      )}
    </>
  );
}

export default Profile;
