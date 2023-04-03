import React from "react";
import styled from "styled-components";
import icon from "../Image/user.png";

const Container = styled.div`
  display: flex;
width: 100%;
  padding: 10px;
  margin: 5px 20px;
  border: 1px solid #e4e3e3;
  box-shadow: 0px 3px 6px #e4e3e3;
  max-width: 450px;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
  padding: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  margin-left: 10px;
  font-weight: 500;
  color: rgb(152, 159, 176);
`;

const Value = styled.span`
  margin-left: 10px;
  font-size: 30px;
  color: #1a1a1b;
`;
const AttendanceDetailsCardItems = () => {
  return (
    <Container>
      <Icon src={icon} />
      <Wrapper>
        <Title>Total Student</Title>
        <Value>400</Value>
      </Wrapper>
    </Container>
  );
};

export default AttendanceDetailsCardItems;
