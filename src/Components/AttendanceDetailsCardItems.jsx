import React from 'react';
import styled from 'styled-components';
import icon from '../Image/user.png';

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  padding: 5px 10px;
`;

const Contain = styled.div`
   {
    width: 100%;
    max-width: 450px;
    display: flex;
    padding: 10px;
    border: 1px solid #e4e3e3;
    box-shadow: 0px 3px 6px #e4e3e3;
  }
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
      <Contain>
        <Icon src={icon} />
        <Wrapper>
          <Title>Total Student</Title>
          <Value>400</Value>
        </Wrapper>
      </Contain>
    </Container>
  );
};

export default AttendanceDetailsCardItems;
