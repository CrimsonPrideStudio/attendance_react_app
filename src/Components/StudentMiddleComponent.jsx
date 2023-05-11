import { React, useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Option = styled.span`
  margin: 10px;
  margin-top: 0px;
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 4px;
  color: ${(props) => (props.selected ? '#000' : '#848da1')};
  font-size: ${(props) => (props.selected ? 20 : 18)}px;
  font-weight: ${(props) => (props.selected ? 600 : 500)};
  border-bottom: ${(props) => (props.selected ? '2px solid #5A98FC' : 'none')};
  cursor: pointer;
  &:hover {
    color: black;
    border-bottom: 2px solid #5a98fc;
    font-weight: 600;
    font-size: 20px;
  }
`;
const StudentMiddleComponent = (props) => {
  const [subjects, setSubjects] = useState([]);
  const [selected, setSelectedOption] = useState();

  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log(props);
      await axios
        .get(
          `http://127.0.0.1:5000/subjects?Stream=${props.Stream}&semester=${props.semester}`
        )
        .then((response) => {
          setSubjects(response.data);
          setIsDataFetched(true);
          console.log(subjects);
        });
    };

    fetchData();
    if (isDataFetched) {
      setSelectedOption(subjects[0].Subject);
    }
  }, [isDataFetched, props.Stream, props.semester]);

  const handleChange = (event) => {
    setSelectedOption(event);
  };

  return (
    <Container>
      {subjects ? (
        subjects.map((subject) => {
          return (
            <Option
              key={subject.Subject}
              selected={selected === subject.Subject}
              onClick={() => handleChange(subject.Subject)}
            >
              {subject.Subject}
            </Option>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default StudentMiddleComponent;
