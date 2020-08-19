import React from "react";

export default function Header(props) {
  return (
    <div id="header">
      <p style={{ color: "#877AD1" }}>
        {props.title1}
        <span className="ml-2" style={{ color: "#29E9E9", opacity: "0.7" }}>
          <br />
          {props.title2}
        </span>
      </p>
    </div>
  );
}
