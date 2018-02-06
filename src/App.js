/*

  TODO:
    fly to location
    fade in out
    screen resolution
*/


import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import mapboxgl from 'mapbox-gl'
import './mapbox-gl.css'
import { mapboxAccessToken } from './constants.js'
mapboxgl.accessToken = mapboxAccessToken


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 0
    }
    this.tick = this.tick.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  componentDidMount () {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/iaaaan/cjdb5jqw126732st5gp8sd7gf',
      center: [10, 25],
      zoom: 1.5
    })

    document.addEventListener("keyup", this.onKeyUp)
    this.tick()
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      step
    } = nextState

    switch (step) {
      case 1: {
        console.log('1')
        break
      }
      case 2: {
        console.log('2')
        break
      }
      case 3: {
        console.log('3')
        break
      }
    }
    return false
  }

  onKeyUp (evt) {
    if (evt.keyCode == 32) {
      this.setState({
        ...this.state,
        step: this.state.step + 1
      })
    }
  }

  tick () {

    // requestAnimationFrame(this.tick)
  }

  render() {
    return (
      <div id="map">
      </div>
    )
  }
}

export default App
