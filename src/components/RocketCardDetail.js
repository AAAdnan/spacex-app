import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const RocketCardDetail = ( { rocket } ) => {

    console.log(rocket)

  return (
    <>  
            <CardContent key={rocket.id}>
                    <img src={rocket.flickr_images[0]} />
                    <CardHeader>{rocket.name}</CardHeader>
                    <CardInfo>{rocket.description}</CardInfo>
                    <CardInfo>Height: {rocket.height.feet} feet</CardInfo>
                    <CardInfo>Weight: {rocket.mass.kg} kg</CardInfo>
                    <CardInfo>First flight: {rocket.first_flight}</CardInfo>
            </CardContent>
    </>
  );
};

const CardContent = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: black;
  width: 30rem;
  height: 30rem;
  border-radius: 20px;
  padding: 2rem;
  color: white;
  border-style: solid;

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const CardBody = styled.div`
  padding: 2rem;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  text-align: center;
  margin: 10px;
`;

const CardInfo = styled.p`
  font-size: 1rem;
  margin: 10px;
`;
