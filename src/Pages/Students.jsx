import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';
import StudentHeader from '../Components/StudentHeader';
import StudentMiddleComponent from '../Components/StudentMiddleComponent';
import { useState, useEffect } from 'react';
import StudentCalendar from '../Components/StudentCalender';
const Container = styled.div`
  padding-left: 10px;
  height: 100%;
`;

const Student = () => {
  const [students, setStudents] = useState({});
  // let location = useLocation();
  // let studentId = location.pathname.split('/')[2];
  const params = useParams();
  const studentId = params.rollNumber;

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:5000/student?student_id=${studentId}`)
        .then((response) => response.json())
        .then((data) => {
          setStudents(data);
          console.log(students);
          console.log(data);
        });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Sidebar />
      <Navbar name={'Student Detail'} />
      <StudentHeader details={students} />
      <StudentMiddleComponent
        Stream={students.Stream}
        semester={students.semester}
        studentId = {studentId}
      />
     
    </Container>
  );
};

export default Student;
