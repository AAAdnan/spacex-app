import React, { useState, useEffect } from "react";
import { LaunchCard } from './LaunchCard'
import styled from 'styled-components'


export const LaunchList = () => {

    const [launches, setLaunches ] = useState([])
    const [showUpcoming, setShowUpComing] = useState(false);


    //Space X API Call Launch Controller

    const getLaunchData = async () => {
        try {   
            const response = await fetch('https://api.spacexdata.com/v4/launches');
            const data = await response.json()
            setLaunches(data)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getLaunchData()
    },[])

    const getUpcomingLaunches = () => {
        let upcomingResults = launches.filter(launch => launch.upcoming)
        setLaunches(upcomingResults)
        setShowUpComing(true)
    }

    const showAll = () => {
        getLaunchData()
        setShowUpComing(false)
      }


    return(
        <>
        <LaunchListWrapper>
        <SearchButtonDiv>
            {showUpcoming ?
            <StyledButton onClick={showAll}>Show All Launches</StyledButton> : 
            <StyledButton onClick={getUpcomingLaunches}> Show Upcoming Launches</StyledButton>
            }
        </SearchButtonDiv>
            {
                launches.map(launchData =>(
                    <LaunchCard launchData={launchData} />
                ))
            }
       </LaunchListWrapper>
       </>
       
    )

}

const LaunchListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  margin: 2rem auto;
`;

const SearchButtonDiv = styled.div `
  display: flex;
  justify-content: space-equally;
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
