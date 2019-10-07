import React, { useEffect, useState, } from 'react';
import {withTheme } from '../providers/ThemeProvider'
import MyParks from './MyParks'
import { Link, } from 'react-router-dom'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
//mark object as saved so that you can set up a user click.

const ShowCurrentPark = (props) => {
  const [showDetails, setShowDetails] = useState(false)
  const { pingingArray, savedPlaces, saveParkToLocalStorage, saveImage, } = props


  const send = () => {
        
    //comes from park info to save user choices
   saveImage(pingingArray[0])
    saveParkToLocalStorage(pingingArray[0].name, pingingArray[0].id)
    }

    const toggle = () => {
      setShowDetails(!showDetails)
    }
    console.log('show details', showDetails)

  const mappedParks = pingingArray.map(aPark => {
    return ( 
      <>
        <div className="options" >

        <p>{aPark.saved && localStorage.getItem(aPark.name) === aPark.id ? 'saved' : 'not saved'}</p>
        
        <h2> {aPark.name}: {aPark.states} </h2>
        </div>
          <p className='details'> <Fade bottom  collapse when={showDetails}>
          {aPark.description}</Fade>
          </p>

        <div className='options'>
                    <button onClick={send}>save as your park</button>

              <hr /><br />
                  <a href={aPark.url}>Visit site</a>
              <hr /> <br />
          <button onClick={toggle}>{showDetails ? 'Hide details' : 'Show details' }</button>
        </div>
      </>
  )
})

console.log(localStorage.length)
  return (
    <div>
      
      { pingingArray.length > 0  ? 
<>
        {mappedParks}
</>
        :
<>
      <h4>Hello, this is a site to help you pick your favorite national parks and make a list to make your national park dreams come true.</h4>
      <br />
      <p>go to the <Link to='/'>home page</Link> and pick your favorite national parks</p>
      <br />
      <p>after you have them picked out go to your <Link to='/your-parks'>parks page</Link> and decide pick everything</p>
</>
      }
      
    </div>
  );
};








export default withTheme(ShowCurrentPark);