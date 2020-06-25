import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import CustomToolbar from "./CustomToolbar";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    const formats = [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "color",
    ];

    const modules = {
      toolbar: {
        container: "#toolbar",
      },
      clipboard: {
        matchVisual: false,
      },
    };

    return (
      <>
        <div className="text-editor">
          <CustomToolbar />
          <ReactQuill
            onChange={this.handleChange}
            placeholder={"Write something..."}
            modules={modules}
            formats={formats}
            theme={"snow"}
          />
        </div>
      </>
    );
  }
}
