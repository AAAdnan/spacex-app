import React, { useState, useEffect } from "react";
import { LaunchCard } from './LaunchCard.js'
import styled from 'styled-components'

export const LaunchList = () => {
  const [launches, setLaunches] = useState([]);
  const [showUpcoming, setShowUpComing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getLaunchesData = async () => {
    const response = await fetch('https://api.spacexdata.com/v4/launches')
    const data = await response.json()
    setLaunches(data) 

  }

  useEffect(() => {
   getLaunchesData()
  },[])

  const handleClick = () => {
    let upcomingResults = launches.filter(launch => launch.upcoming)
    setLaunches(upcomingResults)
    setShowUpComing(true)
  }

  const showAll = () => {
    getLaunchesData()
    setShowUpComing(false)
  }

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const filteredLaunches = launches.filter(launch => {
    const query = searchQuery.toLowerCase();
    const missionName = launch.name.toLowerCase();
    return missionName.includes(query);
  });

  return (
    <>
      <div>
        <SearchButtonDiv>
          <SearchInput
            type="text"
            placeholder="Search by mission name..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {showUpcoming ?
            <StyledButton onClick={showAll}>Show All Launches</StyledButton> : 
            <StyledButton onClick={handleClick}> Show Upcoming Launches</StyledButton>
          }
        </SearchButtonDiv>
        <LaunchListWrapper>
          {filteredLaunches.map(launchData => (
            <LaunchCard launchData={launchData} />
          ))}
        </LaunchListWrapper>
      </div>
    </>
  );
};

const SearchButtonDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center
`

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

const LaunchListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  margin: 2rem auto;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;