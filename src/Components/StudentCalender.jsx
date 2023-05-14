import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

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
`;

function StudentCalendar({ datesToHighlight }) {
  const [date, setDate] = useState(new Date());

  // Define the function to determine the style of each tile
  //   const tileContent = ({ date }) => {
  //     const dateString = date.toISOString().slice(0, 10);

  //     if (datesToHighlight.includes(dateString)) {
  //       // This date should be highlighted with orange
  //       return {
  //         className: 'orange-highlight',
  //         style: { backgroundColor: 'orange' },
  //       };
  //     } else if (date.getDay() === 0 || date.getDay() === 6) {
  //       // This date is a weekend and should be highlighted with green
  //       return {
  //         className: 'green-highlight',
  //         style: { backgroundColor: 'green' },
  //       };
  //     } else {
  //       // This date does not need to be highlighted
  //       return null;
  //     }
  //   };

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <StyledCalendar
      onChange={handleDateChange}
      //   tileContent={tileContent}
      value={date}
    />
  );
}

export default StudentCalendar;
