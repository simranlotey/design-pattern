import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const getSizeStyles = (size) => {
  switch (size) {
    case "small":
      return {
        padding: "8px 16px",
        fontSize: "16px",
        iconSize: "22px",
      };
    case "medium":
      return {
        padding: "12px 16px",
        fontSize: "18px",
        iconSize: "26px",
      };
    case "large":
      return {
        padding: "16px 24px",
        fontSize: "23px",
        iconSize: "32px",
      };
    default:
      return {
        padding: "8px 16px",
        fontSize: "16px",
        iconSize: "22px",
      };
  }
};

const SearchContainer = styled("div")(({ size }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F4F6F9",
  borderRadius: "8px",
  ...getSizeStyles(size),
}));

const Search = ({ size }) => {
  return (
    <>
      <SearchContainer size={size}>
        <SearchIcon
          color="disabled"
          sx={{ fontSize: getSizeStyles(size).iconSize, marginRight: "8px" }}
        />
        <InputBase
          placeholder="Search"
          fullWidth
          sx={{ fontSize: getSizeStyles(size).fontSize }}
        />
      </SearchContainer>
    </>
  );
};

export default Search;
