import React, { useState } from "react";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Chat as MessegeIcon } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";
const Component = styled(Box)`
  height: 44px;
  padding: 8px 16px;
  background: #ededed;
  display: flex;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }
  & :first-child() {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Header = () => {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer=()=>{
    setOpenDrawer(true)
  }



  return (
    <>
      <Component>
        <Image src={account.picture} alt="profile" onClick={()=>toggleDrawer()} />
        <Wrapper>
          <MessegeIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
