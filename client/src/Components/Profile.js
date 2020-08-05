import React, { createContext, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopStuff from "./ProfileStuff/Top";
import ProfileFeed from "./ProfileStuff/ProfileFeed";
import styled, { keyframes } from "styled-components";

function Profile() {
  const [profUser, setProfUser] = React.useState(null);
  const [profStatus, setProfStatus] = React.useState("loading");
  const [profFeed, setProfFeed] = React.useState(null);
  const [feedStatus, setFeedStatus] = React.useState("loading");

  const { handle } = useParams();
  useEffect(() => {
    fetch(`/api/${handle}/profile`)
      .then((response) => response.json())
      .then((data) => {
        const dataInfo = data.profile;
        setProfUser(dataInfo);
        setProfStatus("idle");
      })
      .catch((error) => window.location.replace("/error/404"));
    fetch(`/api/${handle}/feed`)
      .then((response) => response.json())
      .then((data) => {
        setProfFeed(data);
        setFeedStatus("idle");
      })
      .catch((error) => window.location.replace("/error/404"));
  }, [handle]);

  return (
    <All>
      {profStatus === "idle" && feedStatus === "idle" ? (
        <>
          <TopStuff value={profUser}></TopStuff>
          {profFeed.tweetIds.map((Feed) => {
            let Tweet = profFeed.tweetsById[Feed];
            return <ProfileFeed value={Tweet} />;
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
    </All>
  );
}

const All = styled.div``;

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

export default Profile;
