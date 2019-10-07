import React, { useState, } from 'react';

import { withTheme, } from '../providers/ThemeProvider'
import styled from 'styled-components'
import NavLink from './navlinks/NavLink'
import ShowCurrentPark from './ShowCurrentPark'

//make the dropdown menu a hover and nice. 

//make the image go opac for a button click on the show bar if the widow width is less than 700px

const Nav = (props) => {
  
  const {changeTheme} = props
  return (<>

    <NavStyle>
      <NavLink link='/your-parks' title='saved parks' />
      <NavLink link='/' title='home'  />
      
      <div class="themes">
    <p className={props.theme === 'desert' ? 'desert' : 'forest'}>theme</p>

      <button className='desert' onClick={() => changeTheme('desert')}>Desert</button>
      <br />
      <button className="forest" onClick={() => changeTheme('forest')}>Forest</button>
      </div>
      
    </NavStyle>
     
    </>
  );
};



const NavStyle = withTheme(styled.div`

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
background: ${props => props.theme === 'forest' ? 'linear-gradient(-45deg,#405C87,#2f5609)' : 'linear-gradient(45deg, #EEB686 ,#40314E)' };
display: flex;
justify-content: space-around;
align-items: center;
margin: auto;
left: 0;
right: 0;

background-repeat: no-repeat;
width: 100%;
border: 1px solid black;

a {
  text-decoration: none;
  color: ${props => props.theme === 'forest' ? '#A3B038' : "9C887B"};
  transition: 0.3s;
}

a:hover {
  color: ${props => props.theme === 'forest' ? '#A3B038' : '#9C887B' };
}

.home {
  margin-left: 10px;
  color: #1A160D;
  transition: 0.3s;
}
.home:hover {
  color: #A3B038;
}
.select {
  margin-bottom: 10px;
}
 .themes {
  align-self: center;
}

* { 
  font-family: ${props => props.theme === 'forest' ? 'Artifika' : 'Aclonica'};
  font-style: normal; 
  font-variant: normal; 
    }
`)



export default withTheme(Nav);