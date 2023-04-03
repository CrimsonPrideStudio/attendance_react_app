import React from 'react'
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi'

const Search = styled.div`
display:flex;

`
const Form = styled.form`
width:100%;
max-width:200px;
display:flex;
background-color: white;
height: 20px;
justify-content: center;
align-items: center;
border: 1px solid black;
border-radius:2px ;
padding:8px 8px;
backdrop-filter:blur(4px) saturate(180%);
`

const Button = styled.button`
border:0;
border-radius:50%;
background: transparent;
width:30px;
cursor:pointer;
transition-duration: 0.4s;
&:hover{
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
`;
const Input = styled.input`
background: transparent;
flex:1;
outline:none;
font-size:14px;
color:black;
border:0px;
::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
  }
`

function SearchBar() {
  return (
    <>
      <Search>
        <Form><Input type="text" placeholder="Search" />
          <Button type="submit"><BiSearchAlt style={{ color: 'black', fontSize: '20px' }} /></Button>
        </Form>
      </Search>
    </>
  )
}

export default SearchBar;
