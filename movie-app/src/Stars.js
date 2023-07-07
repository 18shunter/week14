import React, { useState } from 'react';

const Stars = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (event) => {
    setRating(parseInt(event.target.value));
  };

  return (
    <div>
      <p>Rate this movie:</p>
      <input type="radio" id="star1" name="rating" value="1" onChange={handleRating} />
      <label htmlFor="star1">1 star</label>
      <input type="radio" id="star2" name="rating" value="2" onChange={handleRating} />
      <label htmlFor="star2">2 stars</label>
      <input type="radio" id="star3" name="rating" value="3" onChange={handleRating} />
      <label htmlFor="star3">3 stars</label>
      <input type="radio" id="star4" name="rating" value="4" onChange={handleRating} />
      <label htmlFor="star4">4 stars</label>
      <input type="radio" id="star5" name="rating" value="5" onChange={handleRating} />
      <label htmlFor="star5">5 stars</label>
    </div>
  );
};

export default Stars;
