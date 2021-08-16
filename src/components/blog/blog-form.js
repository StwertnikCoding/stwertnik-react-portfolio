import React, { Component } from 'react';
import axios from 'axios';

import RichTextEditor from '../forms/rich-text-edtor';

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: "",
        blog_status: "",
        content: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
  }

  handleRichTextEditorChange(content) {
    this.setState({ content });
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);
    formData.append("portfolio_blog[content]", this.state.contet);

    return formData;
  }

  handleSubmit(event){
    axios.post(
        "https://tylerstwertnik.devcamp.space/portfolio/portfolio_blogs", 
        this.buildForm(), 
        { withCredentials: true }
    ).then(response => {
        this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);

        this.setState({
            title: "",
            blog_status: ""
        });
        
    }).catch(error => {
        console.log("handleSubmit for blog error", error);
    });


    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
          <div className="two-column">
            <input
                type="text" 
                onChange={this.handleChange}
                name="title"
                placeholder="Enter Title"
                value={this.state.title}
            />

            <input
                type="text" 
                onChange={this.handleChange}
                name="blog_status"
                placeholder="Enter Blog Status"
                value={this.state.blog_status}
            />
          </div>


          <div className="one-column">
            <RichTextEditor 
              handleRichTextEditorChange={this.handleRichTextEditorChange} 
            />
          </div>
          <button className="other-btn">Save</button>
      </form>
    );
  }
}