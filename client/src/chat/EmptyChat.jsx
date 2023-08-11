import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { emptyChatImage } from "../constant/data";
import styled from "@emotion/styled";

const EmptyChat = () => {
  const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100%;
  `;

  const Container = styled(Box)`
    padding: 0 200px;
  `;

  const Image = styled("img")({
    width: 400,
    marginTop: 100,
  });

  const Title = styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
  `;

  const Subtitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
  `;

  const StyleDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
  `;

  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="empty chat img" />
        <Title>WhatsApp Web</Title>
        <Subtitle>
          Send and receive messages without keeping your phone online.
        </Subtitle>
        <Subtitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </Subtitle>
      </Container>
      <StyleDivider />
    </Component>
  );
};

export default EmptyChat;
