import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import SearchBar from "./Search";
import { useState } from "react";

const Container = styled.div`
 
`;
const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid gray;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.span`
  font-family: "IBM Plex Sans Condensed", sans-serif;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 1px;
  
`;

function Navbar(props) {
  const [selected, setSelected] = useState("");

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchBar />
        </Left>
        <Center>
          <Title>{props.name}</Title>
        </Center>
        <Right>
          <Filter selected={selected} setSelected={setSelected} />
          <Filter selected={selected} setSelected={setSelected} />
        </Right>
      </Wrapper>
      
    </Container>
  );
}

export default Navbar;

// <Title>DASHBOARD</Title>
