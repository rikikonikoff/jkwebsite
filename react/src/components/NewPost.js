import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFiles: []
    };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  onImageDrop(files){
    this.setState({ uploadedFiles: files });
    this.handleImageUpload(files);
  }

  handleImageUpload(files) {
    let requests = files.map(file => {
      return(
        request.post('ENV[CLOUDINARY_BASE_URL]')
          .field('upload_preset', 'ENV[CLOUDINARY_UPLOAD_PRESET]')
          .field('file', file);
        request.end((err, response) => {
          if (err) {
            console.error(err);
          }
        });
      )
    });
  }

  render(){
    return(
      <div>
      Blog post creation form goes here
      <Dropzone
        multiple={true}
        accept="image/*"
        onDrop={this.onImageDrop}>
        <p>Drop an image or click to select a file to upload.</p>
      </Dropzone>
      </div>
    );
  }
}

export default NewPost;
