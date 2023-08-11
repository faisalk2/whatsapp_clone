import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { qrCodeImage } from "../../constant/data";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../servies/api";

const dialogStyle = {
  height: "90%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  boxShadow: "bone",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Qrcode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
    font-size:26px;
    color:#525252
    font-weight:300;
    font-family: inherit;
    margin-bottom: 25px
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const handleLoginSuccess = async (res) => {
    const decode = jwt_decode(res.credential);
    setAccount(decode);
    await addUser(decode);
  };

  const handleLoginFail = (res) => {
    console.log("login fails :", res);
  };

  return (
    <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: dialogStyle }}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open Whatsapp on your phone</ListItem>
            <ListItem>2. Tap Menu Setting and select Whatsapp web </ListItem>
            <ListItem>
              Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <Qrcode src={qrCodeImage} alt="qr code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(25%)",
            }}
          >
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFail}
            />
          </Box>
          ;
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
