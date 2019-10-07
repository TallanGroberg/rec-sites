import React, { Component } from 'react';
import styled from 'styled-components'

const { Provider, Consumer, } = React.createContext()


class ThemeProvider extends Component {

  state = {
    theme: 'desert',
    savedPlaces: [],
    pingingArray: [],

  }


  changeTheme = (arg) => {
    this.setState( prev => ({
      theme: arg
    }))
  }

  saveImage = (parkObj) => {
    this.setState( prev => {

      const filterDublicates =  new Set([...prev.savedPlaces, parkObj, parkObj.saved = true])
      const backToArray = [...filterDublicates]
      const removeBool = backToArray.filter( aThing => {
        return aThing !== true
      })
      return {savedPlaces: removeBool }
    })
  }


  saveParkToLocalStorage = (theKey, theValue) => {
      this.state.savedPlaces.map( aPlace => {
      localStorage.setItem(theKey, theValue)
    })
  }

  
    pushStorageToSavedPlaces = (localStorageId, parksId, parkObj) => {
      if (localStorageId === parksId) {
        this.setState( prev => ({
          savedPlaces: [...prev.savedPlaces, parkObj]
        }))
      }
    }

    removePark = (id) => {
      this.setState( prev => {
        // debugger
        const filteredArray = prev.savedPlaces.filter( aPlace => {
          return id !== aPlace.id
        })
        return  {savedPlaces: filteredArray}
      })

    }

    addToDisplayPark = (arg) => {
        this.setState( prev => ({
          pingingArray: [...prev.pingingArray,  arg]
        }))
    }

    //you actually see the object that got removed and the displaying parks array stays empty
    removeFromParksDisplaying = () => {
      this.state.pingingArray.length = 0
      if (this.state.pingingArray.length > 0)  {
        return this.state.pingingArray.shift()
      } 
    }
      

  render() {
    const { theme, savedPlaces, pingingArray } = this.state

    return (
      <Provider value={{
        theme,
        savedPlaces,
        pingingArray,
        changeTheme: this.changeTheme,
        saveImage: this.saveImage,
        saveParkToLocalStorage: this.saveParkToLocalStorage,
        pushStorageToSavedPlaces: this.pushStorageToSavedPlaces,
        addToDisplayPark: this.addToDisplayPark,
        removeFromParksDisplaying: this.removeFromParksDisplaying,
        removePark: this.removePark,
        

      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export const withTheme = T => props => (
  <Consumer>
    {value => <T {...value} {...props} />}
  </Consumer>
)

export default ThemeProvider;

function newFunction(prev, parkObj) {
  return new Set([...prev.savedPlaces, parkObj.saved = true]);
}
