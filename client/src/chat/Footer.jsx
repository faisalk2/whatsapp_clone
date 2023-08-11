import { Box, InputBase } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { uploadFile } from "../servies/api";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
`;

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  const getImage = async () => {
    const data = new FormData();
    data.append("name", file.name);
    data.append("file", file);

    let response = await uploadFile(data);
    setImage(response?.data);
  };

  useEffect(() => {
    getImage();
  }, [file]);

  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        onChange={(e) => onFileChange(e)}
        style={{ display: "none" }}
      />
      <Search>
        <InputField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          placeholder="Type a message"
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
