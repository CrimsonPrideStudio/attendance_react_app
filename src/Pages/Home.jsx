import React from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar';
import Cards from '../Components/Cards'



const Container = styled.div`

 padding-left: 10px;
height: 100%;


`;

const Home = () => {
    
    return (
      <Container >
        <Sidebar />
        <Navbar name ={"Dashboard"} />
        <Cards />
      </Container>
    );
}

export default Home