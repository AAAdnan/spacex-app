import React, { useState, useEffect } from "react";
import { RocketCard } from './RocketCard.js'
import styled from 'styled-components'

export const RocketList = () => {
  const [rockets, setRockets] = useState([]);

  const getRocketData = async () => {
    const response = await fetch('https://api.spacexdata.com/v4/rockets')
    const data = await response.json()
    setRockets(data) 
  }

  useEffect(() => {
   getRocketData()
  },[])

  return (
    <ListWrapper>
      <GridContainer>
        { rockets && rockets.map(rocketData => (
          <RocketCardWrapper key={rocketData.id}>
            <RocketCard rocketData={rocketData} />
          </RocketCardWrapper>
        ))}
      </GridContainer>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: stretch;;
  margin: 0 auto;
`;

const RocketCardWrapper = styled.div`
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #1c1c1c;
  border: none;
  border-radius: 20%;
  color: #ffffff;
  font-size: 1rem;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  margin: 2rem 0;
  display: inline-block;

  &:hover {
    background-color: #616161;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;