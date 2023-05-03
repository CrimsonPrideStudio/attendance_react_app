import React from "react";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import AttendanceDetailsCard from "../Components/AttendanceDetailsCard";
import Sheet from "../Components/Sheet";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MiddleNavBar from "../Components/MiddleNavBar";

const Container = styled.div`
  padding-left: 10px;
  height: 100%;
`;
const Wrapper = styled.div`
  height: ${(props) => props.screenY / 1.7}px;
  overflow-y: scroll;
  margin-bottom: 100px;
`;
const ScrollWa = styled.div`
  overflow-y: scroll;
  height: 100%;
`;
const Attendence = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect( () => {
    fetch(
      `http://192.168.1.3:5000/attendance/?student_id=301202219021&subject=Mathmatics`
    )
      .then((response) => response.json())
      .then((data) => setAttendance(data));
    console.log(attendance);
  }, []);
  return (
    <Container>
      <Sidebar />
      <Navbar name={""} />
      <ScrollWa>
        <AttendanceDetailsCard />
        <MiddleNavBar />

        <Wrapper screenY={window.screen.height}>
          {attendance.map((data) => {
            return (
              <Sheet
                key={data.id}
                rollNumber={data.student_id}
                Name={data.Name}
                Present={data.Present}
                Stream={data.Stream}
                semester={data.semester}
              />
            );
          })}
        </Wrapper>
      </ScrollWa>
    </Container>
  );
};

export default Attendence;
