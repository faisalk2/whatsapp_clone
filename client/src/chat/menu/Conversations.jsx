import { useEffect, useState } from "react";
import { getUser } from "../../servies/api";
import { Box, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import styled from "@emotion/styled";

const Component = styled(Box)`
  height: 81vh;
  overflow: overly;
`;

const StyleDivider = styled(Divider)`
  padding: 0 0 0 70px;
  background: #e9edef;
  opacity: 0.6;
`;
const Conversations = ({ text }) => {
  const [data, setData] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  const fetchData = async () => {
    let user = await getUser();
    const filterData = user?.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    setData(filterData);
  };

  useEffect(() => {
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Component>
      {data?.map(
        (item, i) =>
          account.sub !== item.sub && (
            <div key={i}>
              <Conversation user={item} />
              <StyleDivider />
            </div>
          )
      )}
    </Component>
  );
};

export default Conversations;
