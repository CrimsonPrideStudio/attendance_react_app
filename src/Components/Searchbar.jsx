import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const Search = styled.div`
  display: flex;
  background-color: #c7dafc;
  padding: 1px;
  border-radius: 2px;
  width: 100%;
  max-width: 270px;
  border: 1px solid #e4e3e3;
`;
const Form = styled.form`
  width: 100%;
  max-width: 200px;
  display: flex;
  background-color: white;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 1px rgba(112, 112, 112, 0.2);
  padding: 10px;
  backdrop-filter: blur(4px) saturate(180%);
`;

const Button = styled.button`
  border: 0;
  border-radius: 50%;
  background: transparent;
  width: 30px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
const Input = styled.input`
  background: transparent;
  flex: 1;
  outline: none;
  font-size: 14px;
  color: black;
  border: 0px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
  }
`;
const Searchbar = () => {
  return (
    <Search>
      <Form>
        <Input type="text" placeholder="Search" />
      </Form>
      <Button type="submit">
        <BiSearchAlt
          style={{ color: "black", fontSize: "20px", marginLeft: "5px" }}
        />
      </Button>
    </Search>
  );
};

export default Searchbar;
