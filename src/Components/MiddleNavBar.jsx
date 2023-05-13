import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Options from './Options';
import SearchBar from './Searchbar';

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  align-items: center;
  margin-right: 70px;
  padding-left: 20px;
`;
const Labels = styled.span`
  width: 20%;
  text-align: center;
`;
const MiddleNavBar = ({ handleSearch }) => {
  return (
    <>
      <Options />
      <Middle>
        <Start>
          <SearchBar handleSearch={handleSearch} />
        </Start>
        <End>
          <Filter />
        </End>
      </Middle>
      <Last>
        <Labels>Student Name</Labels>
        <Labels>Present/Absent</Labels>
        <Labels>Branch</Labels>
        <Labels>Year</Labels>
        <Labels>Details</Labels>
      </Last>
    </>
  );
};

export default MiddleNavBar;
