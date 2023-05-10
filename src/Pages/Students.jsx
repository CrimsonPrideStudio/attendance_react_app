import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';
import StudentHeader from '../Components/StudentHeader';
import StudentMiddleComponent from '../Components/StudentMiddleComponent';
import { useState, useEffect } from 'react';
const Container = styled.div`
  padding-left: 10px;
  height: 100%;
`;

const Student = () => {
  const [students, setStudents] = useState({});
  let location = useLocation();
  let studentId = location.pathname.split('/')[2];
  useEffect(() => {
    const fetchData = () => {
      fetch(`http://192.168.1.12:5000/student?student_id=${studentId}`)
        .then((response) => response.json())
        .then((data) => setStudents(data));
    };
    fetchData();
  }, [studentId]);

  return (
    <Container>
      <Sidebar />
      <Navbar name={'Dashboard'} />
      {students ? (
        <>
          <StudentHeader details={students} />
          <StudentMiddleComponent
            Stream={students.Stream}
            semester={students.semester}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default Student;
