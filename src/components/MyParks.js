import React, { useEffect, } from 'react';
import { withTheme, } from '../providers/ThemeProvider'
import styled from 'styled-components'
import { Link, } from 'react-router-dom'
import PickedPark from './PickedPark'

//make it so that you can delete the parks you choose.
//make it so that you parks you chose render to the browser as soon as the component 
const MyParks = (props) => {

  const { saveImage, savedPlaces, pushStorageToSavedPlaces, } = props


  useEffect( () => {
    if (localStorage.length > 0) {
      
    }
  }, [])
 
  console.log('savedPlaces',savedPlaces)
  
  return (
    <>
      <ParkStyles>
        <div className="container">
        {savedPlaces.length === 0 ? <h1>This is where your parks will be after you choose them from the<Link to='/'>Home page</Link>
          </h1>
    :
        savedPlaces.map(park => {
          return ( <PickedPark park={park} />)
        })}
        
        </div>
      </ParkStyles>
    </>
  );
};

const ParkStyles = withTheme(styled.div`
 
  margin: auto;
  left: 0;
  right: 0;
  p {
    border-bottom: 1px solid black;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }
  button:focus {outline:0;}

  .desert {
    color: ${props => props.theme === 'desert' ? '#CE7F4A' : ""};
  

  background: none;
  border: none;
}

.forest {
  color: ${props => props.theme === 'forest' ? '#A3B038' : ''};
  background: none;
  border: none;
}
  button:active {
  background: none;
  display: hidden;
  border: none;
}

button:hover {
  color: black;
}

  img {
    float: left;
    margin-right: 5px;
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