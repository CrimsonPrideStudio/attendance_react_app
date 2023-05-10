import React from 'react';
import styled from 'styled-components';
import AttendanceDetailsCardItems from './AttendanceDetailsCardItems';

const Container = styled.div`
  margin-top: 20px;

  transition: all 0.2s;
`;
const Wrapper = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 1px;
  margin-right: 20px;
`;
const Top = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-left: 30px;
`;
const Bottom = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 20px;
`;
const SubjectName = styled.span`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 1px;
`;
const Semester = styled.span`
  padding: 5px;
  padding-left: 0px;
  color: #99a1b1;
  font-weight: 600;
`;
const Stream = styled.span`
  padding: 5px;
  padding-left: 0px;
  color: #99a1b1;
  font-weight: 600;
`;
const AttendanceDetailsCard = (props) => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <SubjectName>Subject:{props.subject}</SubjectName>
          <Stream>Stream: {props.stream}</Stream>
          <Semester>Semester: {props.semester}</Semester>
        </Top>
        <Bottom>
          <AttendanceDetailsCardItems
            title={'Total Student'}
            data={props.totalStudent}
          />
          <AttendanceDetailsCardItems
            title={'Present Student'}
            data={props.Present}
          />
          <AttendanceDetailsCardItems
            title={'Absent Student'}
            data={`${props.totalStudent - props.Present}`}
          />
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default AttendanceDetailsCard;
