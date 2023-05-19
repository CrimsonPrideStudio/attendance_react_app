import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const StyledCalendar = styled(Calendar)`
  border: none;
  font-size: 1.2rem;
  height: 100%;
  width: calc(100vw - 320px);
  margin-left: 300px;
  .react-calendar__tile {
    height: calc(50vh / 6);
  }
  .react-calendar__navigation__label {
    font-size: 1.5rem;
    padding: 10px;
  }
  .highlight_Date {
    background-color: #5df15d;
  }
`;

function StudentCalendar(props) {
  const [presentDate, setDate] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch(
        `http://127.0.0.1:5000/personalAttendance?student_id=${props.studentId}&Subject=${props.Subject}`
      )
        .then((response) => response.json())
        .then((data) => {
          setDate(data.map((item) => item.Update_Date));
        });
    };
    fetchData();
  }, [props]);

  function getTileClassName({ date }) {
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    const localDateString = localDate.toISOString().split("T")[0];
    if (presentDate.includes(localDateString)) {
      return "highlight_Date";
    }
  }

  return <StyledCalendar tileClassName={getTileClassName} />;
}

export default StudentCalendar;
