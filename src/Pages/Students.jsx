import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar';
import StudentHeader from "../Components/StudentHeader";
import Sheet from "../Components/Sheet";
import StudentMiddleComponent from "../Components/StudentSubjectsOptions";
import { useState, useEffect } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db, firebase } from "../Components/Utility/firebase-config";
const Container = styled.div`
  padding-left: 10px;
  height: 100%;
`;
const styles = {
  textDecoration: "none",
  color: "inherit",
};

const Student = () => {
  const [students, setStudents] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [attendancce, setAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const studentDocument = doc(firebase, "Students", "301202219020");
      const subjectsCollection = collection(studentDocument, "Attendance");
      const snapshotAttendance = await getDocs(subjectsCollection);
      const subjectData = snapshotAttendance.docs.map(doc => doc.id);
      const attendanceData = snapshotAttendance.docs.map(doc => doc.data());
      setSubjects(subjectData);

      const snapshot = await getDoc(studentDocument);
      if (snapshot.exists()) {
        const data = snapshot.data();
        setStudents(data);
      } else {
        console.log("No data found for document!");
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <Sidebar />
      <Navbar name={"Dashboard"} />
      <StudentHeader details={students} />
      <StudentMiddleComponent subjects={subjects} />

    </Container>
  );
};

export default Student;
