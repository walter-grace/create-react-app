import React, { Component } from 'react';
import './App.css'
import ReactPlayer from 'react-player'
import Xtsy from './xtsy.mp4'
import Mike from './miked.mp4'

class App extends Component {
  render() {
    return (
      <div>
        
    <div class="macintosh" aria-label="1984 Macintosh illustration">
        <div class="monitor">
          <div class="monitor-inner">
            <div class="screen-cutout">
              <div class="screen">
              <ReactPlayer url={Mike}
              width='100%'
              height='100%'
              controls />
              </div>
              </div>
              <div class="logo"> 
            </div>
            <div class="opening">
              <div class="opening-inner">
              <span class="text">Macintosh Plus</span>
              </div>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="inset"></div>
          <div class="cable-container">
            <div class="cable-hole"></div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
