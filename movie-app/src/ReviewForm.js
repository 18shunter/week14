import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addReview(review);
    setReview('');
  };

  const handleChange = (event) => {
    setReview(event.target.value);
  };

  return (
    <div>
      <h3>Add a Review</h3>
      <form onSubmit={handleSubmit}>
        <textarea value={review} onChange={handleChange} rows="3" cols="40" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
