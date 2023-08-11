import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useEffect, useState, useRef } from "react";
import { AccountContext } from "../context/AccountProvider";
import { getMessages, newMessage } from "../servies/api";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 78vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  const { account, socket,messageFlag,setMessageFlag } = useContext(AccountContext);

  const scrollRef = useRef();

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [incomingMessages, setIncomingMessages] = useState(null);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessages({ ...data, createdAt: Date.now() });
    });
  }, []);

  useEffect(() => {
    incomingMessages &&
      conversation?.members?.includes(incomingMessages.senderId) &&
      setIncomingMessages((pre) => [...pre, incomingMessages]);
  });

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code == 13) {
      let message = {};

      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sentMessage", message);

      await newMessage(message);
      setValue("");
      setFile("");
      setImage("");
      setMessageFlag((pre) => !pre);
    }
  };

  const getMessageDetails = async () => {
    let data = await getMessages(conversation._id);
    setMessages(data);
  };

  useEffect(() => {
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, messageFlag]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Wrapper>
      <Component>
        {messages?.map((message, i) => (
          <Container ref={scrollRef} key={i}>
            <Message messages={message} />
          </Container>
        ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
