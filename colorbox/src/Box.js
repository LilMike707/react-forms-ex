import React from "react";

function Box(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        width: `${props.width}px`,
        height: `${props.height}px`,
      }}
    ></div>
  );
}

export default Box;
