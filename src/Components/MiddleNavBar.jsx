import React, { useState } from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Options from './Options';
import SearchBar from './Searchbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ClearButton = styled.button`
  margin-right: 8px;
  padding: 8px 4px;
`;

const Start = styled.div`
  display: flex;
  flex: 1;
`;
const End = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const Last = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 20px;
`;
const Labels = styled.span`
  text-align: center;
`;
const MiddleNavBar = ({ handleSearch, handleDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };
  const clearDate = () => {
    setSelectedDate(null);
    handleDateChange("All");
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
    handleDateChange(date); // Callback to the parent component
    setIsOpen(false);
  };

  return (
    <>
      <Options />
      <Middle>
        <Start>
          <SearchBar handleSearch={handleSearch} />
        </Start>
        <End>
          <div>
            <input
              type='text'
              value={selectedDate ? selectedDate.toLocaleDateString() : ''}
              onClick={toggleCalendar}
              style={{ padding: '8px' }}
            />
            <ClearButton onClick={clearDate}>Clear</ClearButton>
            {isOpen && (
              <div style={{ position: 'absolute', right: '10px' }}>
                <DatePicker
                  selected={selectedDate}
                  onChange={onDateChange}
                  inline
                />
              </div>
            )}
          </div>
        </End>
      </Middle>
      <Last>
        <Labels style={{ width: '25%', textAlign: 'left' }}>
          Student Name
        </Labels>
        <Labels style={{ width: '12.5%' }}>Present/Absent</Labels>
        <Labels style={{ width: '12.5%' }}>Branch</Labels>
        <Labels style={{ width: '12.5%' }}>Year</Labels>
        <Labels style={{ width: '12.5%' }}>Date</Labels>
        <Labels style={{ width: '25%' }}>Details</Labels>
      </Last>
    </>
  );
};

export default MiddleNavBar;
