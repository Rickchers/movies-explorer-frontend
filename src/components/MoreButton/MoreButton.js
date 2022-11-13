import React from "react";

import "./MoreButton.css";

function MoreButton(props) {
  
  function handleMore() {
    //console.log(props.total);
    props.handleTotal();
  }

  return (
    <div className="movies__button-wrapper">
    <button
      type="button"
      onClick={handleMore}
      className="movies__button-more"
    >
      Ещё
    </button>
  </div>
  )
}

export default MoreButton;