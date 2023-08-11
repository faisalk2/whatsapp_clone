import styled from "@emotion/styled";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const MenuOption = styled(MenuItem)`
  font-size: 13px;
  padding: 15px 60px 5px 24px;
  color: #4a4a4a;
`;

const HeaderMenu = ({ setOpenDrawer }) => {
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        anchorEl={open}
      >
        <MenuOption
          onClick={() => {
            setOpenDrawer(true);
            handleClose();
          }}
        >
          Profile
        </MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
