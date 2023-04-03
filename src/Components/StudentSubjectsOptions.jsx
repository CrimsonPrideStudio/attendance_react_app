import { React, useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { doc, getDoc, collection, getDocs, CollectionReference } from "firebase/firestore";
import { db, firebase } from "./Utility/firebase-config";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
justify-content: space-between;
`;
const Option = styled.span`
  margin: 10px;
  margin-top: 0px;
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 4px;
  color: ${(props) => (props.selected ? '#000' : '#848da1')};
  font-size: ${(props) => (props.selected ? 20 : 18)}px;
  font-weight: ${(props) => (props.selected ? 600 : 500)};
  border-bottom: ${(props) => (props.selected ? '2px solid #5A98FC' : 'none')};
  cursor: pointer;
  &:hover {
    color: black;
    border-bottom: 2px solid #5A98FC;
    font-weight: 600;
    font-size: 20px;
  }
`;

const StudentMiddleComponent = (props) => {

  const [selected, setSelectedOption] = useState(props.subjects[0]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const attendanceRef = doc(firebase, "Students", "301202219020");

      const co = collection(attendanceRef, "Attendance")
      const s = doc(co, selected == null ? props.subjects[0] : selected)
      const snapshot = await getDoc(s);

      if (!snapshot.empty) {
        
        setAttendanceData(snapshot.data())
        console.log(attendanceData);
      } else {
        console.log("No data found for collection!");
      }
    };

    fetchData();
  }, [selected]);


  const handleChange = (event) => {
    setSelectedOption(event);
    console.log(attendanceData)

  };
  return (
    <Container>
      {
        props.subjects.map((subject) => {
          return (
            <Option
              selected={selected === subject}
              onClick={() => handleChange(subject)}
            >
              {subject}
            </Option>
          )
        })
      }

    </Container>
  );
};

export default StudentMiddleComponent;

