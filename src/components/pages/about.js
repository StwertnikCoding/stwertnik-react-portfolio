import React, { Component } from 'react';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about-page-wrapper">
          <div className="left-column-wrapper">
            <div className="about-image-wrapper">
                <img className="about-image" src={require('../../logo/about-image.png')}></img>
            </div>
          </div>
          <div className="right-column-wrapper">
            <div className="bio-wrapper">
                
                        Hi! My name is Tyler Stwertnik, and I'm from Denver, Colorado.
                <p>        
                    This is my react portfolio, which I built with the help of my college to showcase
                    and display any and all React applications I build. I also implemented a manager,
                    authorization, and a blog element.
                </p>
                <p>
                        I am an 18 year old Full Stack Web Developer! My main language is javascript, and I 
                    am really liking React Js right now. I also know C++, Java, HTML, Scss, and some Python 
                    I will have my Full Stack Web Development Certificate from Bottega Tech soon here, and 
                    I'm excited to finally get started building some more high level programs.
                    
                </p>
            </div>
          </div>
      </div>
    );
  }
}