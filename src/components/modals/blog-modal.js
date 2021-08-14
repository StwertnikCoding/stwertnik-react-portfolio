import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class BlogModal extends Component {
  constructor(props) {
      super(props);

      this.customStyles = {
          content: {
              top: "50%",
              left: "50%",
              right: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)" ,
              width: "800px",
              color: "$offwhite",
              backgroundColor: "#230000"
          },
          overlay: {
              backgroundColor: "rgba(20, 1, 1, 0.80)"
          }
      }
  } 

  render() {
    return (
      <div>
        <ReactModal 
            style={this.customStyles}
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