import React from 'react';
import styled from 'styled-components'
import { withTheme, } from '../providers/ThemeProvider'
import Fade from 'react-reveal/Fade'

const CheckIndication = (props) => {

  const { pingingArray, } =  props
  return (<div>
   
      {console.log(pingingArray)}
      {pingingArray.map(aPark => {
        console.log(aPark.saved)
        return <p>{aPark.saved && localStorage.getItem(aPark.name) === aPark.id ?  <Fade top big><h1 style={{ color: 'whitesmoke'}}>|√| Saved</h1></Fade> : null }</p>
      })}
    </div>
  );
};



export default withTheme(CheckIndication);