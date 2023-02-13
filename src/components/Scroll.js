import React from "react";

function Scroll({ children }) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid yellow",
        height: "600px",
        padding: "2rem",
        margin: "1.5rem 4rem",
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;
