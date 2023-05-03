import React from "react";
import styled from "styled-components";
import user from "../Image/user.png";

const Container = styled.div`
  display: flex;
  border-bottom: 2px solid gray;
  padding: 10px;

  margin: 20px;
  background-color: white;
  border-radius: 2px;
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  flex-direction: column;
`;

const Top = styled.div`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: end;
`;

const Down = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  margin-top: 15px;
  font-size: 17px;
  font-weight: 600;
`;

const StudentData = styled.span`
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;

const CoverImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50px;
  padding: 10px;
`;

export default function StudentHeader(students) {
  return (
    <Container>
      <Left>
        <Top>
          <StudentData>{students.details.Name}</StudentData>
        </Top>
        <Down>
          <StudentData>Roll Number: {students.details.student_id}</StudentData>
          <StudentData>Year: {students.details.semester}</StudentData>
          <StudentData>Course: {students.details.Stream}</StudentData>
          <StudentData>Enrollnment Number: {students.details.EnrollNumber}</StudentData>
          <StudentData>DOB: {students.details.DOB}</StudentData>
          <StudentData>Gender: {students.details.Gender}</StudentData>
          <StudentData>
            Mobile Number: {students.details.MobileNumber}
          </StudentData>
          <StudentData>Email: {students.details.Email} </StudentData>
        </Down>
      </Left>
      <Right>
        <CoverImg src={user} alt="Profile Image" />
      </Right>
    </Container>
  );
}
