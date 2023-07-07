import React from 'react';
import MovieList from './MovieList';

const movies = [
  {
    title: 'Toy Story',
    
    synopsis: 'A story about toys that come to life when humans are not around.',
  },
  {
    title: 'Finding Nemo',
    
    synopsis: 'A clownfish embarks on a journey to find his son who has been captured in the Great Barrier Reef.',
  },
  {
    title: 'The Lion King',
    
    synopsis: 'A young lion prince must overcome adversity and reclaim his throne.',
  },
];

const App = () => {
  return (
    <div>
      <h1>Movie App</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
