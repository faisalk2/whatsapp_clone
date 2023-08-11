import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { downloadMedia, formatDate } from "../utils/common_utils";
import { AccountContext } from "../context/AccountProvider";
import { GetApp } from "@mui/icons-material";
import { iconPDF } from "../constant/data";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  work-break: break-work;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  work-break: break-work;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
`;

const Message = ({ messages }) => {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.sub === messages.senderId ? (
        <Own>
          {messages.type === "file" ? (
            <ImageMessage messages={messages} />
          ) : (
            <TextMessage messages={messages} />
          )}
        </Own>
      ) : (
        <Wrapper>
          {messages.type === "file" ? (
            <ImageMessage messages={messages} />
          ) : (
            <TextMessage messages={messages} />
          )}
        </Wrapper>
      )}
    </>
  );
};

const ImageMessage = ({ messages }) => {
  return (
    <Box style={{ position: "relative" }}>
      {messages.text.includes(".pdf") ? (
        <Box style={{ display: "flex" }}>
          <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
          <Typography style={{ fontSize: 14 }}>
            {messages.text.split("/").pop()}
          </Typography>
        </Box>
      ) : (
        <img
          style={{ width: 300, height: "100%", objectFit: "cover" }}
          src={messages.text}
          alt={messages.text}
        />
      )}
      <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
        <GetApp
          style={{
            marginRight: 10,
            border: "1px solid gray",
            borderRadius: "50%",
          }}
          onClick={(e) => downloadMedia(e, messages.text)}
        />
        {formatDate(messages.createdAt)}
      </Time>
    </Box>
  );
};

const TextMessage = ({ messages }) => {
  return (
    <>
      <Text>{messages.text}</Text>
      <Time>{formatDate(messages.createdAt)}</Time>
    </>
  );
};

export default Message;
