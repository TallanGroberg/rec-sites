import React from 'react';
import {withTheme} from '../providers/ThemeProvider'
const PickedPark = (props) => {

  const { park } = props
  return (<div><img className='img' src={park.picture} /></div>
  
  );
};

export default withTheme(PickedPark);