import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { messageSquare } from "react-icons-kit/feather/messageSquare";
import { repeat } from "react-icons-kit/feather/repeat";
import { heart } from "react-icons-kit/feather/heart";
import { upload } from "react-icons-kit/feather/upload";

// const TweetActionIcon = ({ size = 24, color }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24">
//     {Icon}
//   </svg>
// );

const DivDiv = styled.div`
  /* we heard you liek divs so we put a div in your div to div your div */
  display: flex;
  justify-content: space space-evenly;
  padding-bottom: 15px;
  border-bottom: solid 1px coral;
`;

const ActionBarIcons = styled.button`
  display: block;
  margin-left: 30px;
  padding-left: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;

  svg {
    width: 20px;
    height: 20px;
    color: purple;
  }

  &:active {
    color: inherit;
  }
`;

const ActionBar = () => {
  return (
    <DivDiv>
      <ActionBarIcons>
        <Icon icon={messageSquare} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={repeat} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={heart} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={upload} />
      </ActionBarIcons>
    </DivDiv>
  );
};

export default ActionBar;
