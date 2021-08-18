import React, { Component } from 'react';
import ReactModal from 'react-modal';

import BlogForm from '../blog/blog-form';

ReactModal.setAppElement(".app-wrapper");

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
              backgroundColor: "#230000",
              height: "81%"
              
          },
          overlay: {
              backgroundColor: "rgba(20, 1, 1, 0.80)"
          }
      };

      this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
  } 

  handleSuccessfulFormSubmission(blog) {
    this.props.handleSuccessfulNewBlogSubmission(blog)
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
            <BlogForm handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission} />
        </ReactModal>
      </div>
    );
  }
}