import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import { ParticleComponent } from '../components/ParticleComponent';
import { Link } from 'react-router-dom';

export const HomePage = () => {

  return (
    <>
      <HomePageWrapper>
        <Heading>Welcome to the Space X app</Heading>
        <HomePageContent>
          Find information on  SpaceX launches and Space X rockets. 
        </HomePageContent>
        <Div>
          <Link to="/launches">
            <LaunchesButton >Launches</LaunchesButton>
          </Link>
          <Link to="/rockets">
          <RocketsButton>Rockets</RocketsButton>
          </Link>
        </Div>
        <ParticleComponent />
      </HomePageWrapper>
    </>
  );
};

const Div = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
`;

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Heading = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 3rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

const HomePageContent = styled.p`
     color: rgb(255, 7, 110);
     font-size: 1.5rem;
`;

const LaunchesButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 200px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #141414;
  }
`;

const RocketsButton = styled(LaunchesButton)`
  background-color: rgb(255, 7, 110);;

  &:hover {
    background-color: #d83128;
  }
`;