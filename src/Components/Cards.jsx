import styled from 'styled-components';
import Card from './Card';
import React, { useState, useEffect } from 'react';
import { db } from './Utility/firebase-config';
import { onValue, ref } from 'firebase/database';
import { Link } from 'react-router-dom';
const Wraper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 3px;
  overflow-y: scroll;
`;

const styles = {
  textDecoration: 'none',
  color: 'inherit',
};
function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/dashboard/?Stream=All&semester=0`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Wraper>
      {data.map((item) => {
        return (
          <Link
            key={item.id}
            to={`attendance/${item.semester}/${item.Stream}/${item.Subject}`}
            style={styles}
          >
            <Card
              subject={item.Subject}
              semester={item.semester}
              date={item.Update_Date}
              teacher={item.teacher}
              percentage={`${(item.Present / item.Total_Student) * 100}`}
            />
          </Link>
        );
      })}
    </Wraper>
  );
}

export default Cards;
