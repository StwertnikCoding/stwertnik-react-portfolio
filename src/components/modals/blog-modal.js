import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class BlogModal extends Component {
  constructor(props) {
      super(props);
  } 

  render() {
    return (
      <div>
        <ReactModal 
            onRequestClose={() => {
                this.props.handleModalClose();
            }} 
            isOpen={this.props.modalIsOpen}
        >
            <h1>I'm in a Modal bruh!</h1>
        </ReactModal>
      </div>
    );
  }
}