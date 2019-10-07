import React, { useEffect, useState } from 'react';
import {withTheme} from '../providers/ThemeProvider'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


const PickedPark = (props) => {
  const [hideInfo, setHideInfo] = useState(false)

  const { removePark, park, theme, saveImage, savedPlaces, pushStorageToSavedPlaces, } = props



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
      <button className={theme} onClick={toggle}>{!hideInfo ? 'show info' : 'hide info'}</button>
          <button className={theme} onClick={removeItem}>Delete Park</button>
      
         <Fade bottom  collapse when={hideInfo}>
            <p className='details'>
              {park.description}
            </p>
          <h4>full Name: {park.fullName}</h4>
            <Link to={park.url}>Visit Site</Link>
          </Fade>
      </div>
    
  
  );
};



export default withTheme(PickedPark);