import { Box, Drawer, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import styled from "@emotion/styled";
import Profile from "./Profile";

const drawerStyle = {
  left: 20,
  top: 17,
  width: "30%",
  height: "95%",
};

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const Text = styled(Typography)`
  font-size: 18px;
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      style={{ zIndex: 1500 }}
      PaperProps={{ sx: drawerStyle }}
      open={open}
      onClose={handleClose}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)} />
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
