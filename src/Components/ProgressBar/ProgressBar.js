import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const styles = {
  stroke: red 
};
export default function Pbar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < props.percentage) {
        setPercentage(percentage + 1);
      }
    }, 25);
  }, [percentage, props.percentage]);

  return (
    <div style={{ width: 100, marginLeft: 70 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}
