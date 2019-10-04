import React, { useState, useEffect } from 'react';
import { withTheme, } from '../providers/ThemeProvider'
import styled from 'styled-components'




const ParkInfo = (props) => {
  const [imageSent, setImageSent] = useState(false)

    const {parks,
        saveImage,
         savedPlaces, 
         saveParkToLocalStorage, 
         pushStorageToSavedPlaces,
          addToDisplayPark,
           removeFromParksDisplaying,
            sendStatetoContext,
             } 
            = props

      const savedPlacesIds = savedPlaces.map(aPlace => {
        return aPlace.id
      })

      const parksId = parks.id 


        useEffect( () => {
            if (savedPlacesIds === parks.id) {

              parks.saved = true 
            }
            pushStorageToSavedPlaces(localStorage.getItem(parks.name), parksId, parks)
                if (localStorage.getItem(parks.name) === parksId && savedPlacesIds !== localStorage.getItem(parks.name)) {
              saveImage(parks)
            } 
        }, [])


        
        
        const send = () => {
          if (imageSent === false){
            setImageSent(true)
            addToDisplayPark(parks)
            removeFromParksDisplaying()
          } else {
            parks.saved = true
            setImageSent(false)
            addToDisplayPark(parks)
            removeFromParksDisplaying()
           }
        }


      
       
      
        

        return (
          <>
           
              <div className={parks.saved === true && localStorage.getItem(parks.name) ?  'saved' : 'not-saved' } >
              
          
              <img className='img'  
             
                onClick={send} src={parks.picture}
                 />

            
            </div>
          </>
  );
};




export default withTheme(ParkInfo);