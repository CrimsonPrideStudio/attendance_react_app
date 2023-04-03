import React from 'react'
import styled from 'styled-components'
import user from '../Image/user.png'
import { Link } from "react-router-dom";
const Container = styled.div`
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    border-radius: 5px;
    margin:5px 20px;
    border: 1px solid #e4e3e3;
    box-shadow: 0px 3px 6px #e4e3e3;
    &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
    transition: scale(1.01);
    cursor: pointer;
  }
`

const Pack = styled.div`
display:flex;
align-items: center;
`

const CoverImg = styled.img`
    width: 35px;
    border-radius: 50px;
`
const Name = styled.div`
margin-left: 10px;
        color:black;
    font-weight: 600;
`
const Attendance = styled.div`
background-color: #d3fcc0;
border: 0px solid;
border-radius: 20px;
padding: 5px;
font-weight: bold;
`

const AttendanceText = styled.span`
padding: 10px;
color: #03db03;
font-weight: 600;
`
const Stream = styled.div`
color: black;
font-weight: 500;
`
const Year = styled.div`
color: black;

font-weight: 500;
`
const Detail = styled.a`
color: #3b83ff;
font-weight: 700;
margin-right: 20px;

`
const styles = {
    textDecoration: 'none',
    color: 'inherit'
}
const Sheet = () => {
    return (
        <Link to="student" style={styles}>
            <Container>
                <Pack>
                    <CoverImg src={user} alt="Article Cover" />
                    <Name>Priyanshu Sahu</Name></Pack>
                <Attendance><AttendanceText>Present</AttendanceText></Attendance>
                <Stream>CSE</Stream>
                <Year>4</Year>
                <Detail>See Student Detail</Detail>
            </Container>
        </Link>
    )
}

export default Sheet

