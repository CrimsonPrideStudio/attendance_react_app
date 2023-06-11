import React from "react";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import AttendanceDetailsCard from "../Components/AttendanceDetailsCard";
import { useParams } from "react-router-dom";
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
  const [filteredAttendance, setFilteredAttendance] = useState([]);
  const params = useParams();
  const subject = params.subject;
  const [queryDate, setQueryDate] = useState("All");
  useEffect(() => {
    fetch(
      `http://localhost:5000/attendance/?Subject=${subject}&date=${queryDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAttendance(data);
        setFilteredAttendance(data);
      });
  }, [queryDate]);

  const handleSearch = (searchValue) => {
    const filteredData = attendance.filter((data) =>
      data.Name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredAttendance(filteredData);
  };
  const handleDateChange = (date) => {
    if (date == "All") {

      setQueryDate("All");
    }else{
      const formattedDate = date ? date.toISOString().split("T")[0] : "All";
      setQueryDate(formattedDate);
    }

   
  };

  return (
    <Container>
      <Sidebar />
      <Navbar name={"Attendance"} />
      <ScrollWa>
        <AttendanceDetailsCard subject={subject} />
        <MiddleNavBar
          handleSearch={handleSearch}
          handleDateChange={handleDateChange}
        />
        <Wrapper screenY={window.screen.height}>
          {filteredAttendance.map((data) => {
            console.log(data);
            return (
              <Sheet
                key={data.id}
                rollNumber={data.student_id}
                Name={data.Name}
                Present={data.Present}
                Stream={data.Stream}
                semester={data.semester}
                date={data.Attendance_Date}
              />
            );
          })}
        </Wrapper>
      </ScrollWa>
    </Container>
  );
};

export default Attendence;
