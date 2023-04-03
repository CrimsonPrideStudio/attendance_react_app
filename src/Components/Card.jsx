import React from "react";
import styled from "styled-components";

import Pbar from "./ProgressBar/ProgressBar";

const Card1 = styled.div`
  margin: 20px;
  padding: 20px;
  width: 300px;
  min-height: 150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  background-color: white;
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transition: scale(1.01);
  }
`;
const Sname = styled.div`
  grid-column: 1/-1;
  color: #000000;
  font: small-caps bold 24px/1 sans-serif;
`;
const Year = styled.div``;

const Tname = styled.div``;

const Date = styled.div``;

const Circle = styled.div`
  grid-row: 5/2;
  grid-column: 2;
`;

export default function Card(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let month = props.date.toLocaleString("en-US", { month: "long" });
  month = month.length > 5 ? month.slice(0, 3) : month;
  const year = props.date.getFullYear();

  return (
    <>
      <Card1 >
        <Sname>{props.sub_name}</Sname>
        <Circle>
          {" "}
          <Pbar percentage={props.percentage}></Pbar>{" "}
        </Circle>
        <Year> {props.year} </Year>
        <Tname> {props.teacher} </Tname>
        <Date>
          <div style={{ position: "absolute" }}>
            {day} {month} {year}
          </div>
        </Date>
      </Card1>
    </>
  );
}
