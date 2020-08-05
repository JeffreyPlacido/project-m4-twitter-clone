import React from "react";
import styled from "styled-components";
import { u1F4A3 as bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";
import Icon from "react-icons-kit";

const Bomb = () => {
  return (
    <div>
      <Bomber>
        <Icon icon={bomb} size={200} />
      </Bomber>
      <p>
        It seems something has stopped working, use the sidebar to get back{" "}
      </p>
    </div>
  );
};

const Bomber = styled.div`
  svg {
    color: coral;
  }
`;

export default Bomb;
