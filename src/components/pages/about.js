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
                    Here is some sample text of my bio right here
                </p>
            </div>
          </div>
      </div>
    );
  }
}