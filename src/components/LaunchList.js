import React, { useState, useEffect } from "react";
import { LaunchCard } from './LaunchCard'
import styled from 'styled-components'


export const LaunchList = () => {

    const [launches, setLaunches ] = useState([])

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
        let upcomingLaunches = launches.filter(launch => launch.upcoming)

        console.log(upcomingLaunches)
    }


    return(
        <>
        <LaunchListWrapper>
        <button onClick={getUpcomingLaunches}>Show Upcoming Launches</button>
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
