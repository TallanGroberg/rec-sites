import React, { useState, useEffect, } from 'react';
import styled from 'styled-components';
import { withTheme, } from '../providers/ThemeProvider';
import ParkInfo from './ParkInfo'
import ShowCurrentPark from './ShowCurrentPark'
import CheckIndication from './CheckIndication'

const Home = (props) => {
  
  const { parks} = props.parks
  
 
 

  
  
  return (
    <>
      <InfoStyle>
        <ShowCurrentPark />
      </InfoStyle>
   <HomeStyle>
    <div className="container">
        {parks.map(park => {
          return <ParkInfo parks={park}  />
        })}
      </div>
    </HomeStyle>

      <CheckStyles>
        <CheckIndication />
      </CheckStyles>
    </>
  );
};


const InfoStyle = withTheme(styled.div`
      z-index: 2;
      position: sticky;
      top: 0;
      height: 100%;
      display: flex;
      flex-basis: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: ${props => props.theme === 'forest' ? 'linear-gradient(-45deg,#405C87,#2f5609)' : 'linear-gradient(45deg, #EEB686 ,#40314E)' }
  }
      * { 
      font-family: ${props => props.theme === 'forest' ? 'Artifika' : 'Aclonica'};
      font-style: normal; 
      font-variant: normal; 
    }
    button:focus {outline:0;}
    button {
      text-decoration: none;
      color: ${props => props.theme === 'desert' ? '#8E0000' : "#A3B038"};
      background: none;
      border: none;
    }
    button:hover {
      color: black;
    }
    a {
      text-decoration: none;
      color: ${props => props.theme === 'desert' ? '#8E0000' : "#A3B038"};
      font-size: ${props => props.theme === 'desert' ? '' : ''}
    }
    a:hover {
      color: black;
    }
    div > .options {
      display: flex;
      justify-content: space-between;
      align-content: auto;
    }
    div > .details {
      margin: 1em;
    }
`)




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

const CheckStyles = withTheme(styled.div`
z-index: 2;
display: flex;
flex-direction: grid-row-end;
position: sticky;
margin: auto;

bottom: 20px;
height: 100%;

* { 
  font-family: ${props => props.theme === 'forest' ? 'Artifika' : 'Aclonica'};
  font-style: normal; 
  font-variant: normal; 
    }
`);










export default withTheme(Home);