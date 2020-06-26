import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import CustomToolbar from "./CustomToolbar";

import Search from "./Search";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: "",
      displaySearch: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.insertGif = this.insertGif.bind(this);
    this.quillRef = null;
    this.reactQuillRef = null;
  }

  componentDidMount() {
    this.attachQuillRefs();
  }
  componentDidUpdate() {
    this.attachQuillRefs();
  }

  attachQuillRefs() {
    if (typeof this.reactQuillRef.getEditor !== "function") return;
    this.quillRef = this.reactQuillRef.getEditor();
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  insertGif() {
    this.setState({ displaySearch: true });
  }

  setUrl(url) {
    this.setState({ displaySearch: false });
    const quillEditor = this.reactQuillRef.getEditor();
    const range = quillEditor.getSelection(true);
    quillEditor.insertEmbed(range.index, "image", url);
    quillEditor.setSelection(range.index + 1);
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
      "image"
    ];

    const modules = {
      toolbar: {
        container: "#toolbar",
        handlers: {
          insertGif: this.insertGif,
        },
      },
      clipboard: {
        matchVisual: false,
      },
    };

    return (
      <>
        {this.state.displaySearch ? <Search data={this.setUrl} /> : ""}
        <div
          className={"text-editor" + (this.state.displaySearch ? " editorBg" : "")}
        >
          <CustomToolbar />
          <ReactQuill
            onChange={this.handleChange}
            ref={(el) => {
              this.reactQuillRef = el;
            }}
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
