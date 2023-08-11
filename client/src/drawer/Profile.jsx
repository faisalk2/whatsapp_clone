import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import styled from "@emotion/styled";
const Profile = () => {
  const { account } = useContext(AccountContext);

  const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
  `;

  const Image = styled("img")({
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: "25px 0",
  });

  const BoxWrapper = styled(Box)`
    background: #ffffff;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
      color: #009688;
    }
    & :last-child {
      margin: 14px 0;
      color: #4a4a4a;
    }
  `;

  const DescriptionContainer = styled(Box)`
    padding: 15px 20px 25px 30px;
    & > p {
      font-size: 13px;
      color: #8696a0;
    }
  `;

  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="profile picture" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DescriptionContainer>
        <Typography>
          This is not your username and pin. This name will be visible to your
          whatsApp contacts.
        </Typography>
      </DescriptionContainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat Sleep Code Repeat</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
