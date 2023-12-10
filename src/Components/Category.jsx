import React, { useState } from "react";
import "./Category.css";
import Action from "../Images/action.png";
import Drama from "../Images/drama.png";
import Romance from "../Images/romance.png";
import Thriller from "../Images/thriller.png";
import Fantasy from "../Images/fantasy.png";
import Horror from "../Images/horror.png";
import Music from "../Images/music.png";
import Western from "../Images/western.png";
import Fiction from "../Images/fiction.png";

function Category({ genre, color, handleClick, id }) {
  const [isClicked, setIsClicked] = useState(false)
  const genreImages = {
    Action,
    Drama,
    Romance,
    Thriller,
    Fantasy,
    Horror,
    Music,
    Western,
    Fiction,
  };

  const clicked = () => {
    setIsClicked(true)
    handleClick(genre, id);
  }

  return (
    <div
      className="categorys"
      onClick={clicked}
      style={{ backgroundColor: `${color}`, border: isClicked === true  ?  '4px solid green' : "",}}  
    >
      <p className="genre-name">{genre}</p>
      <img src={genreImages[genre]} alt="" />
    </div>
  );
}

export default Category;