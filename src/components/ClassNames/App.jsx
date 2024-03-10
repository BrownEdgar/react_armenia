import React, { useState } from 'react';
import MovieData from './MovieData/MovieData';

function App() { 
    const [movieData, setMovieData] = useState([
        {
         id: 1,
         title: "Terminator",
         genre: "Action",
         stock: 6,
         rate: 2.5,
        },
        {
         id: 2,
         title: "Die Hard",
         genre: "Action",
         stock: 5,
         rate: 2.5,
        },
        {
         id: 3,
         title: "Get Out",
         genre: "Thriller",
         stock: 8,
         rate: 3.5,
        },
        {
         id: 4,
         title: "Trip to Italy",
         genre: "Comedy",
         stock: 7,
         rate: 3.5,
        },
        {
         id: 5,
         title: "Airplane",
         genre: "Comedy",
         stock: 7,
         rate: 3.5,
        },
       ]);


       const handleDelete = (id) => {
        const updatedMovies = movieData.filter(movie => movie.id !== id);
        setMovieData(updatedMovies);
       };

       const handleSorted = () => {
        setMovieData((prevData) => {
            return prevData.toSorted((a, b)=> a.rate < b.rate ? 1 : -1)
        })
       }


  return (
    <div className='App'>
        <MovieData 
        handleDelete={handleDelete} 
        movieData={movieData}
        handleSorted={handleSorted}
        />
        
    </div>
  );
}

export default App;