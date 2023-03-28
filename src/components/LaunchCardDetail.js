import styled from 'styled-components'
import React, { useState, useEffect } from "react";
import Tilt from 'react-parallax-tilt';


export const LaunchCardDetail = ( {launch} ) => {

    const convertedData = (date) => {
        let localDate = new Date(date).toLocaleString("en-US", {
            localeMatcher: "best fit",
            timeZoneName: "short"
          });

          return localDate
    }

    console.log(launch)

  return (
    <> 
     <Tilt>
        <CardContent key={launch.id}>
                <CardHeader>{launch.name}</CardHeader>
                <CardDate>{convertedData(launch.date_local)}</CardDate>
                <CardInfo>{launch.details}</CardInfo>
                <CardLinks>
                    {launch.links.wikipedia &&
                    <a href={launch.links.wikipedia} target="_blank">Wikipedia Article</a>
                    }
              </CardLinks>
                <img src={launch.links.patch.small} /> 
        </CardContent>
        </Tilt>
    </>
  );
};

const CardContent = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: rgb (0, 87, 138);
  width: 15rem;
  height: auto;
  border-radius: 20px;
  padding: 2rem 2rem;
  color: white;
  border-style: solid;
`;

const CardHeader = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    text-align: center;
    margin: 2rem 0;
`;

const CardDate = styled.p`
     color: rgb(255, 7, 110);
     font-size: 14px;
`;

const CardInfo = styled.p`
     font-size: 1rem;
     color: white;
`;

const CardLinks = styled.div`
  margin: 10px;
  word-break: break-all;
`;