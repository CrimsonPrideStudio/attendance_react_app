import styled from "styled-components";
import Card from "./Card";
import React, { useState, useEffect } from "react";
import { db } from "./Utility/firebase-config";
import { onValue, ref } from "firebase/database";
import { Link } from "react-router-dom";
const Wraper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 3px;
  overflow-y: scroll;
`;

const styles = {
  textDecoration: "none",
  color: "inherit",
};
function Cards() {
  let data = [
    {
      sub_name: "Compiler Design",
      year: "4th Year",
      teacher: "Priyanshu",
      date: new Date(2022, 11 - 1, 28),
    },
  ];

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const query = ref(db, "4 CSE");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((datas) => {
          setClasses((classes) => [...classes, datas]);
        });
      }
    });
  }, []);
  return (sudo apt install gh
          return (
            <Link to="attendance/4/cse/english" style={styles}>
              <Card
                sub_name={a.subject}
                year={a.collegeYear}
                teacher={a.teacherName}
                date={data[0].date}
                percentage={95}
              ></Card>
            </Link>
          );
        })}
      </Wraper>
    </>
  );
}

export default Cards;
