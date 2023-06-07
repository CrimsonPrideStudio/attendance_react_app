import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';
import Cards from '../Components/Cards';

const Container = styled.div`
  padding-left: 10px;
  height: 100%;
`;

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/dashboard/?Stream=All&semester=0`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (searchValue) => {
    const filteredData = data.filter(
      (data) =>
        data.subject &&
        data.subject.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <Container>
      <Sidebar />
      <Navbar name={'Dashboard'} handleSearch={handleSearch} />
      <Cards data={filteredData} />
    </Container>
  );
};

export default Home;
