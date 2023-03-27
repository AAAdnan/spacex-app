import React, { useState, useEffect } from "react";
import { LaunchCard } from './LaunchCard'

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


    return(
        <>
       {
           launches.map(launchData =>(
               <LaunchCard launchData={launchData} />
           ))
       }
       </>
       
    )

}