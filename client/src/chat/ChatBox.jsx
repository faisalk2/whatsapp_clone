import { useContext, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { Box } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
import { getConversation } from "../servies/api";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);

  return (
    <Box style={{ height: "74%" }}>
      <ChatHeader person={person} />
      <Messages 
       person={person}
       conversation={conversation}
      />
    </Box>
  );
};

export default ChatBox;
