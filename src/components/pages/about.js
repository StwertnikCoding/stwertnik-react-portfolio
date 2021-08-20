import React, { Component } from 'react';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about-page-wrapper">
          <div className="right-column-wrapper">
            <div className="about-image-wrapper">
                <img className="about-image" src={require('../../logo/about-image.png')}></img>
            </div>
          </div>
          <div className="left-column-wrapper">
            <div className="bio-wrapper">
                <p>
                    Hi! My name is Tyler Stwertnik, and I'm from Denver, Colorado.
                    This is my react portfolio, which I built with the help of my college to showcase
                    and display any and all React applications I build. I also implemented a manager,
                    authorization, and a blog element.

                    
                    
                </p>
            </div>
          </div>
      </div>
    );
  }
}