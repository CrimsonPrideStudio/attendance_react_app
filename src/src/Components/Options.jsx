import React from 'react';
import styled from 'styled-components';
import bgImage from '../Image/detail.jpg';

const Container = styled.div`
  width: 100%;
`;

const Image = styled.div`
  background-image: linear-gradient(to bottom, transparent, #202124),
    url(${bgImage});
  width: 100%;
  min-height: 27rem;
  height: 70vh;
  background-size: cover;
  background-position: 0%;
  display: flex;
`;
const Left = styled.div`
  width: 40%;
  padding: 1rem;
  color: white;
  position: relative;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 4rem;
  right: 4rem;
  margin: 5rem 2rem;
`;
const Title = styled.h1``;

const Desc = styled.p`
  color: #b6b5b5;
`;

const Section = styled.div``;
const Info = styled.div`
  display: flex;
`;
const ReleaseYear = styled.div`
  padding: 0 1rem 0 0;
  border-right: 0.15rem solid white;
`;
const MatureRated = styled.div`
  padding: 0 1rem;
  border-right: 0.15rem solid white;
`;
const Seasons = styled.div`
  padding: 0 1rem;
`;

const