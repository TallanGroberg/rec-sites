import React, { Component } from 'react';
import axios from 'axios'
import {Route, Switch } from 'react-router-dom'
import { withTheme,  } from './providers/ThemeProvider'
import styled from 'styled-components'
import Nav from './components/Nav'
import Home from './components/Home'
import MyParks from './components/MyParks'
import CheckIndication from './components/CheckIndication'



import arcadia from './images/arcadia.jpg'
import sunset from './images/sunset.jpg'
import redRock from './images/redRock.jpg'
import sunset2 from './images/sunset2.jpg'
import nightSky from './images/nightSky.jpg'
import jaged from './images/jaged.jpg'
import nebula from './images/nebula.jpg'
import gizer from './images/gizer.jpg'
import snow from './images/snow.jpg'
import northernLights1 from './images/northernLights1.jpg'
import bear from './images/bear.jpg'
import river from './images/river.jpg'
import arch from './images/arch.jpg'
import fall from './images/fall.jpg'
import nl2 from './images/nl2.jpg'
import person from './images/person.jpg'
import waterfall from './images/waterfall.jpg'
import handHold from './images/handleHold.jpg'
import raft from './images/raft.jpg'

//main goals 
//1: mobile responsive 
//2: transitions and fades 
//3:  responsive grid landing page 

// pictures for sites 

// make nice home page with pictures and a responsive grid. 
// when image is clicked, take user to page about picture 

//todos make the ability to comment with full crud on a specific park 
//make users have identity with context
//make aria labels for site
// make a second language option

//make a global style


 const pictures =  [ 
  arcadia,
 sunset,
 redRock,
 sunset2,
 nightSky,
 jaged,
 nebula,
 gizer,
 snow,
 northernLights1,
 bear,
 river,
 arch,
 fall,
 nl2,
 person,
 waterfall,
 handHold,
 raft,
]
//{...park, picture: pictures[i]}

class App extends Component {

  state = {
    parks: [],
  }


    componentDidMount(){
      axios.get("https://developer.nps.gov/api/v1/parks?limit=15&api_key=ITWTCahKz7ncRmMjAZ6IgeJ5QG1iZNe12NftfXaE")
      .then(res => {
          this.setState({
              parks: res.data.data.map( (park, i) => {
              return {...park, picture: pictures[i],
                              saved: false,
              }
            })
          })
            
      })
      .catch(err => console.log(err))
    }

    render() {

      return (<>

      <Nav />
        <Container>
          <Switch>
            <Route exact path='/' render={ (rProps) => <Home {...rProps} parks={this.state} /> } />
            <Route exact path='/your-parks' render={ (rProps) => <MyParks {...rProps} parks={this.state.parks} /> } />
          </Switch>
        </Container>
          <CheckStyles>
            <CheckIndication />
          </CheckStyles>
      </>
    );
  }
}

const CheckStyles = withTheme(styled.div`



z-index: 2;
display: flex;
flex-direction: grid-row-end;
position: sticky;
margin: auto;

bottom: 20px;
height: 100%;
`);

const Container = withTheme(styled.div`

      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${props => props.theme === 'forest' ? 'linear-gradient(-45deg,#405C87,#2f5609)' : 'linear-gradient(45deg, #EEB686 ,#40314E)' };
      * { 
  font-family: ${props => props.theme === 'forest' ? 'Artifika' : 'Aclonica'};
  font-style: normal; 
  font-variant: normal; 
    }
`);

export default withTheme(App);


