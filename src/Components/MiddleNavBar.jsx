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
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 20px;
`;
const Labels = styled.span`
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
      <Last >
        <Labels style={{width:"25%",textAlign:"left"}}>Student Name</Labels>
        <Labels style={{width:"16.66666667%"}}>Present/Absent</Labels>
        <Labels style={{width:"16.66666667%"}}>Branch</Labels>
        <Labels style={{width:"16.66666667%"}}>Year</Labels>
        <Labels style={{width:"25%"}}>Details</Labels>
      </Last>
    </>
  );
};

export default MiddleNavBar;
