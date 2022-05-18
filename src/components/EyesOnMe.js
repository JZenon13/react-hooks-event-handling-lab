// Code EyesOnMe Component Here
import React from "react";
function handleClick(e) {
  if (e._reactName === "onBlur") {
    console.log("Hey! Eyes on me!");
  } else {
    console.log("Good!");
  }
}
function EyesOnMe() {
  return (
    <button onBlur={handleClick} onFocus={handleClick}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
