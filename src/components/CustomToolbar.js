import React from "react";

export default function CustomToolbar() {
  return (
    <div id="toolbar">
      <select className="ql-header" defaultValue="">
        <option value="1" />
        <option value="2" />
        <option value="3" />
        <option value="4" />
        <option value="5" />
        <option value="6" />
        <option value="" />
      </select>
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline mt2"></button>
      <select className="ql-color mt2" defaultValue="">
        <option value="red" />
        <option value="green" />
        <option value="blue" />
        <option value="orange" />
        <option value="violet" />
        <option value="#d0d1d2" />
        <option value="" />
      </select>
      <button className="ql-insertGif">
        <span className="ql-gif">G</span>
      </button>
    </div>
  );
}
