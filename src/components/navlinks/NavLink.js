import React, { useState, } from 'react';
import { Link } from 'react-router-dom'
import {withTheme } from '../../providers/ThemeProvider'
import Fade from 'react-reveal'
import styled from 'styled-components'


const NavLink = (props) => {
  const [fade, setFade] = useState(false)
      const {savedPlaces, title, theme, } = props


      const toggle = () => {
        setFade(!fade)
      }
  return (
    <>
      <Link to={props.link} onMouseEnter={toggle}>
      <Fade top cascade when={!fade}>
        <p onMouseOver={toggle}>
          {title === 'saved parks' ? 
          <p className={theme}>saved parks {savedPlaces.length}</p>
          
          : 
          title
          } 
        </p>
        
      </Fade>
      <Fade bottom cascade when={fade}>
        <p onMouseOver={toggle}>
        {title === 'saved parks' ? <p className={theme}>saved parks {savedPlaces.length}</p> : title }
        </p>
      </Fade>
      </Link>
    </>
  );
};







export default withTheme(NavLink);