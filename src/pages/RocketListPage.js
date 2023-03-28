import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import { RocketList } from '../components/RocketList';

export const RocketListPage = () => {
  return (
    <>
      <Heading>Welcome to Space X Rockets</Heading>
      <RocketListWrapper >
        <RocketList />
      </RocketListWrapper>
    </>
  );
};

const RocketListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled.h1`
  text-align: center;
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;
