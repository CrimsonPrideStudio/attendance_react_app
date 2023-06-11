import React from 'react';
import styled from 'styled-components';
import user from '../Image/user.png';
import { Link } from 'react-router-dom';
const Container = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  text-align: center;
  margin: 5px 20px;
  border: 1px solid #e4e3e3;
  box-shadow: 0px 3px 6px #e4e3e3;
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
    transition: scale(1.01);
    cursor: pointer;
  }
`;

const Pack = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  object-fit: fill;
`;
const Name = styled.div`
  margin-left: 10px;
  color: black;
  font-weight: 600;
`;
const Attendance = styled.div`
  background-color: #d3fcc0;
  border: 0px solid;
  border-radius: 20px;
  padding: 5px;
  font-weight: bold;
`;

const AttendanceText = styled.span`
  padding: 10px;
  color: #03db03;
  font-weight: 600;
`;
const Stream = styled.div`
  color: black;
  font-weight: 500;
`;
const Year = styled.div`
  color: black;

  font-weight: 500;
`;
const Detail = styled.a`
  color: #3b83ff;
  font-weight: 700;
 margin-left: 15px;
`;
const styles = {

};
const Sheet = (Props) => {

  return (
    <Container>
      <Pack style={{width:"25%"}} >
        <CoverImg
          src='https://api.time.com/wp-content/uploads/2014/09/macaca_nigra_self-portrait_rotated_and_cropped.jpg?'
          alt='Article Cover'
        />
        <Name>{Props.Name}</Name>
      </Pack>
      <Attendance style={{width:"12.5%"}}>
        <AttendanceText>
          {Props.Present == 1 ? 'Present' : 'Absent'}
        </AttendanceText>
      </Attendance>
      <Stream style={{width:"12.5%"}}>{Props.Stream}</Stream>
      <Year style={{width:"12.5%"}}>{Props.semester}</Year>
      <Year style={{width:"12.5%",textAlign:"center"}}>{Props.date}</Year>
      <Link style={{width:"25%",textDecoration:"none"}} to={`/students/${Props.rollNumber}`}>
        <Detail >See Student Detail</Detail>
      </Link>
    </Container>
  );
};

export default Sheet;
