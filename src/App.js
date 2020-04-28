import React, { Component } from 'react';
import './App.css'
import ReactPlayer from 'react-player'
import Xtsy from './xtsy.mp4'

class App extends Component {
  render() {
    return (
      <div>
        
    <div class="macintosh" aria-label="1984 Macintosh illustration">
        <div class="monitor">
          <div class="monitor-inner">
            <div class="screen-cutout">
              <div class="screen">
              <ReactPlayer url="https://www.youtube.com/watch?v=2oSMkywWFFI&feature=youtu.be"
              width='100%'
              height='100%'
              controls />
              </div>
            </div>
            <div class="opening">
              <div class="opening-inner">
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
