import React from "react";
import styled from "styled-components";
import SideBarItems from "./SideBarItems";
import { MdDashboard } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { Logout } from "@mui/icons-material";

const Container = styled.div`
  float: left;
  width: 300px;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  left: -15px;

  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #202a46, black);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const Top = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  border-bottom: 1px solid white;
height: 67px;
`;

const Middle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  flex-grow:1;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: auto;
`;

const LogoutPanel = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  border-top: 1px solid white;
`;
const Label = styled.h5`
  color: white;
  padding-left: 15px;
`;
const Title = styled.h1`
  font-family: "IBM Plex Sans Condensed", sans-serif;
  font-size: 30px;
 margin-top: 10px;
  color: white;

`;
const Sidebar = () => {
  let fontSize = { fontSize: "20px", color: "#ffffff" };
  return (
    <Container>
      <Wrapper>
        <Top>
          <Title>Attendance App</Title>

        </Top>

        <Middle>
          <Label>Home</Label>
          <SideBarItems
            name="Dashboard"
            icon={<MdDashboard style={fontSize} />}
          />
          <Label>Organize</Label>
          <SideBarItems
            name="Students"
            icon={<FaUserGraduate style={fontSize} />}
          />
          <SideBarItems
            name="Faculty"
            icon={<HiUserGroup style={fontSize} />}
          />
          <Label>Manage</Label>
          <SideBarItems
            name="User"
            icon={<BsFillPersonFill style={fontSize} />}
          />
        </Middle>

        <Bottom>
          <LogoutPanel>
          <SideBarItems name = "LogOut" icon = {<Logout style={fontSize} />} />
          </LogoutPanel>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
