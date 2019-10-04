import React from 'react';
import { withTheme, } from '../providers/ThemeProvider'
import styled from 'styled-components'
import { Link, } from 'react-router-dom'
import PickedPark from './PickedPark'

//make it so that you can delete the parks you choose.

const MyParks = (props) => {



  const {savedPlaces, parks, } =  props
 

  
  return (
    <>
    <ParkStyles>

    <div className="container">

    {savedPlaces.length === 0 ? <h1>This is where your parks will be after you choose them from the<Link to='/'>Home page</Link>
       </h1>

:

    savedPlaces.map(park => {
      return <PickedPark park={park} />
    })}
    
    </div>
    </ParkStyles>
    </>
  );
};

const ParkStyles = withTheme(styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
    grid-gap: 5px;
    grid-auto-rows: 150px;
    grid-auto-flow: dense; 
  }

  .container > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container > div > .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  a {
      text-decoration: none;
      color: ${props => props.theme === 'desert' ? '#8E0000' : "#A3B038"};
      font-size: ${props => props.theme === 'desert' ? '' : ''}
    }
    a:hover {
      color: black;
    }

`);

export default withTheme(MyParks);