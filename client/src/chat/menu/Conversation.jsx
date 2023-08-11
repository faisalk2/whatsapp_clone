import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { setConversation, getConversation } from "../../servies/api";
import { formatDate } from "../../utils/common_utils";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  height: 50,
  width: 50,
  borderRadius: "50%",
  padding: "0 14px",
});

const Conversation = ({ user }) => {
  const { setPerson, account, messageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data.updatedAt });
    };
  }, [messageFlag]);

  return (
    <Component onClick={getUser}>
      <Box>
        <Image src={user.picture} alt="" />
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <Typography>{formatDate(message?.timestamp)}</Typography>
          )}
        </Box>
        <Box>
          <Typography>
            {message?.text?.includes("localhost") ? "media" : message?.text}
          </Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;
