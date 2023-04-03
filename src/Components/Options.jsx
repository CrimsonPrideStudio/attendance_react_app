import { borderBottom, fontWeight } from "@mui/system";
import { React, useState } from "react";
import styled from "styled-components";

const OptionsList = styled.div`
display: flex;
flex-wrap: wrap;
`

const Option = styled.span`
margin:10px;
padding: 10px;
padding-bottom: 4px;
color: #848DA1;
font-size: 18px;
font-weight: 500;
cursor: pointer;

`
const selectedStyles = {
  color: 'black',
  borderBottom: '2px solid #5A98FC',
  fontWeight: ' 600',
  fontSize: '20px',
}

const unselected = {
  margin: '10px',
  padding: '10px',
  paddingBottom: '4px',
  color: '#848DA1',
  fontSize: '18px',
  fontWeight: '500',
}

const Options = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {

    setIsActive(current => !current);

  }

  return (
    <OptionsList>
      <Option onClick={handleClick} style={isActive ? selectedStyles : unselected}>Over All </Option>
      <Option onClick={handleClick} style={!isActive ? selectedStyles : unselected}> By Date</Option>
    </OptionsList>
  )
}



export default Options