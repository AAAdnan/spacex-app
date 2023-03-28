import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LaunchCardDetail } from '../components/LaunchCardDetail'

export const LaunchCardDetailPage = () => {
  const { id } = useParams();
  const [launch, setLaunch] = useState(null);

  const getLaunchData = async () => {
    const response = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
    const data = await response.json();
    setLaunch(data);
  };

  console.log(launch)

  useEffect(() => {
    getLaunchData();
  }, [id])

  return (
    <LaunchListWrapper>
       { 
        launch ? 
      <LaunchCardDetail launch={launch} /> 
      : 
      <div>Data is loading...</div> 
       }
    </LaunchListWrapper>
  );

}

const LaunchListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
