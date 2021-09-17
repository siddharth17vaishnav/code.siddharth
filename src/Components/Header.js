import React from 'react';
import '../App.css';
import Typical from 'react-typical';


const Header = () => {
    return (
        <div>
             <div id="hero" class="hero route bg-image">
    <div class="overlay-itro"></div>
    <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
          <p class="display-6 color-d">Hello, world!</p>
          <h1 class="hero-title mb-4">SIDDHARTH VAISHNAV</h1>
          <span style={{fontSize:30}}>I 'm <span style={{color:"red"}}>
            <Typical 
            loop={Infinity}
            wrapepr="b"
            steps={['Front End Developer',1500, 'App Developer',1500,'Gamer',1500,'Weeb',1500]}
            />
           </span>
          </span>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Header
