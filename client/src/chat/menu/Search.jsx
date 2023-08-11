import { Box, InputBase } from "@mui/material";
import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import styled from "@emotion/styled";

const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  margin: 0 13px;
  padding: 5px;
  width: 100%;
  border-radius: 10px;
`;
const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  color: #919191;
  padding: 4px 10px;
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding: 10px;
  height: 15px;
  padding-left: 65px;
  font-size: 14px;
`;

const Search = ({ setText, text }) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize="small" />
        </Icon>
        <InputField
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search or Start a new chat"
        />
      </Wrapper>
    </Component>
  );
};

export default Search;
