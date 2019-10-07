import React, { useEffect, useState } from 'react';
import {withTheme} from '../providers/ThemeProvider'
import { Link } from 'react-router-dom'
const PickedPark = (props) => {
  const [hideInfo, setHideInfo] = useState(true)
  const { removePark, park, saveImage, savedPlaces, pushStorageToSavedPlaces, } = props


  
  const toggle = () => {
    setHideInfo(!hideInfo)
  }
  const removeItem = () => {
    localStorage.removeItem(park.name)
    removePark(park.id)

  }



  
  return ( 
    
      <div>
      <h1>{park.name}</h1>
      <img height='200px' width='200px' className='img' src={park.picture} />
      {!hideInfo && 
        <>
          <h4>full Name: {park.fullName}</h4>
          <p>{park.description}</p> 
            <Link to={park.url}>Visit Site</Link>
          <button onClick={removeItem}></button>

        </> }
      <br />
      <button onClick={toggle}>{hideInfo ? 'show info' : 'hide info'}</button>

      </div>
    
  
  );
};

export default withTheme(PickedPark);