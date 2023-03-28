import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RocketCardDetail } from '../components/RocketCardDetail'


export const RocketCardDetailPage = () => {
  const { id } = useParams();
  const [rocket, setRocket] = useState(null);

  const getRocketData = async () => {
    const response = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
    const data = await response.json();
    setRocket(data);
  };

  console.log(rocket)

  useEffect(() => {
    getRocketData();
  }, [id])

  return (
    <RocketListWrapper>
       { 
        rocket ? 
      <RocketCardDetail rocket={rocket} /> 
      : 
      <div>Data is loading...</div> 
       }
    </RocketListWrapper>
  );

}

const RocketListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
