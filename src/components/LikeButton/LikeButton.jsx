import React, { useState } from "react";
import "./LikeButton.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(24);

  const handleClick = () => {
    setCount((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  return (
    <button
      className={`like-button ${liked ? "active btn-bounce" : ""}`}
      onClick={handleClick}
    >
      <div className="icon" />
      <div className="text">{liked ? "Liked" : "Like"}</div>
    </button>
  );
};

export default LikeButton;
