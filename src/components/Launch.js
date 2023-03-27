import React, { useState, useEffect } from "react";
import { LaunchCard } from './LaunchCard'

export const Launch = () => {

    const [launches, setLaunches ] = useState([])

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


    return(
        <>
        <div>{JSON.stringify(launches, null, 2)}</div>
       {
           launches.map(launchData =>(
               <LaunchCard launchData={launchData} />
           ))
       }
       </>
       
    )

}