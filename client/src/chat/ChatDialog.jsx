import { Box, Dialog } from "@mui/material";
import React, { useContext } from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./EmptyChat";
import styled from "@emotion/styled";
import ChatBox from "./ChatBox";
import { AccountContext } from "../context/AccountProvider";

const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  borderRadius: 0,
  maxWidth: "100%",
  boxShadow: "bone",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = () => {
  const { person } = useContext(AccountContext);

  return (
    <Dialog
      maxWidth={"md"}
      open={true}
      hideBackdrop={true}
      PaperProps={{ sx: dialogStyle }}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
         { Object.keys(person).length>0 ? <ChatBox />: <EmptyChat />}
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
