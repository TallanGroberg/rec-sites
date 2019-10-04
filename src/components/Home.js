import React, { useState, useEffect, } from 'react';
import styled from 'styled-components';
import { withTheme, } from '../providers/ThemeProvider';
import ParkInfo from './ParkInfo'
import ShowCurrentPark from './ShowCurrentPark'


const Home = (props) => {
  
  const { parks} = props.parks
  
 
 

  
  
  return (
    <>
   
    <HomeStyle>
    <div className="container">
        {parks.map(park => {
          return <ParkInfo parks={park}  />
        })}
      </div>
    </HomeStyle>
    </>
  );
};





const HomeStyle = withTheme(styled.div`

  .container {
    margin: 5px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
    grid-auto-rows: 150px;
    grid-auto-flow: dense;
    opacity: 1;
  }

   .container > div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s
   }
   .container >  div:active {
    transform: scale(1.03)
   }
   

   
    .container >  div > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .container > .saved {
      opacity: 0.5;
    }


  div:nth-child(3n+0) {
    grid-column: auto / span 2; 
  }

 div:nth-child(4n+0) {
    grid-row: auto / span 2;
  }


  
   div:nth-child(5n+0) {

    grid-row: auto / span 2;
    grid-column: auto / span 2;
  } 
`)








export default withTheme(Home);