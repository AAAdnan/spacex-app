import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import { LaunchList } from '../components/LaunchList';

export const LaunchListPage = () => {
  return (
    <>
      <Heading>Welcome to Space X Launches</Heading>
      <LaunchListWrapper>
        <LaunchList />
      </LaunchListWrapper>
    </>
  );
};

const LaunchListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled.h1`
  text-align: center;
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;
