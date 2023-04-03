import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Dropdown = styled.form`
  width: 200px;
  position: Relative;
`;

const DropContent = styled.select`
  padding: 10px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 500;
  color: #333;
  width: 90%;
`;

export default function Filter({ selected, setSelected }) {
  const [value, setValue] = useState("default");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <Dropdown onSubmit={handleSubmit}>
      <DropContent defaultValue={value} onChange={handleChange}>
        <option value="default" disabled hidden>
          Streams
        </option>
        <option value="1">Computer Science</option>
        <option value="2">Bio Technology</option>
        <option value="3">Civil Engineering</option>
      </DropContent>
    </Dropdown>
  );
}
