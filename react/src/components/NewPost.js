import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: null,
      cloudinaryUploadUrl: 'ENV[CLOUDINARY_BASE_URL]',
      cloudinaryUploadPreset: 'ENV[CLOUDINARY_UPLOAD_PRESET]'
    };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  onImageDrop(files){
    this.setState({ uploadedFile: files[0] });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(this.state.cloudinaryUploadUrl)
                        .field('upload_preset', this.state.cloudinaryUploadPreset)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render(){
    return(
      <div>
      Blog post creation form goes here
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={this.onImageDrop}>
        <p>Drop an image or click to select a file to upload.</p>
      </Dropzone>
      </div>
    );
  }
}

export default NewPost;
