import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page-wrapper">
        
        <div className="left-column-wrapper">
            <div className="contact-image-wrapper">
                <img className="contact-image" src={require('../../logo/contact-image.png')}></img>
            </div>
        </div>
        
        <div className="right-column-wrapper">
            <div className="contact-info-wrapper">
                <div className="contact-icon-wrapper">
                    <FontAwesomeIcon icon="code" />
                </div>

                <div className="contact-email-wrapper">
                    stwertnikdevelopment@gmail.com
                </div>
            </div>

            <div className="contact-info-wrapper">
                <div className="contact-icon-wrapper">
                    <FontAwesomeIcon icon="compact-disc" />
                </div>

                <div className="contact-email-wrapper">
                    chransondub@gmail.com
                </div>
            </div>

            <div className="contact-info-wrapper">
                <div className="contact-icon-wrapper">
                    <FontAwesomeIcon icon={['fab', 'github-alt']} />
                </div>

                <a 
                    className="github-link-wrapper"
                    href='https://github.com/StwertnikCoding'
                >
                    GitHub
                </a>
            </div>

            <div className="contact-info-wrapper">
                <div className="contact-icon-wrapper">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </div>

                <a 
                    className="linkedin-link-wrapper"
                    href='https://www.linkedin.com/in/tyler-stwertnik-2989b7192/'
                >
                    Linkedin
                </a>
            </div>
        </div>
      </div>
    );
  }
}