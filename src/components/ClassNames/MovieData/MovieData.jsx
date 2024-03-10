import React from 'react';
import './MovieData.scss';

function MovieData({ movieData, handleDelete, handleSorted}) {

  return (
    <div className='MovieData'>
      <table>
      <caption>Showing {movieData.length} movies in the DataBase</caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>
              Rate
              <span className='MovieData__Icon'>
                <i onClick={handleSorted} className='bx bx-sort-alt-2'></i>
              </span>
              </th>
          </tr>
        </thead>
        <tbody>
          {movieData.map(elem => (
            <tr key={elem.id}>
              <td>{elem.title}</td>
              <td>{elem.genre}</td>
              <td>{elem.stock}</td>
              <td>{elem.rate} <button className='MovieData__Delete' onClick={()=> handleDelete(elem.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieData;