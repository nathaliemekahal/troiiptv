import React from "react";

export default function Header(props) {
  return (
    <div id="header">
      <p style={{ color: "#2e3192" }}>
        {props.title1}
        <span className="ml-2" style={{ color: "#AD235E", opacity: "0.7" }}>
          <br />
          {props.title2}
        </span>
      </p>
    </div>
  );
}
