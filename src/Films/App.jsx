
import React, { useState } from 'react';
import './App.scss';
import filmData from './Film.js';

export default function App() {
    const [films, setFilms] = useState(filmData);
    const [sortByAsc, setSortByAsc] = useState(false);

    const handleSort = () => {
        const sortedFilms = films.toSorted((a, b) => {
            if (sortByAsc) {
                return a.rate - b.rate;
            } else {
                return b.rate - a.rate;
            }
        });
        setFilms(sortedFilms);
        setSortByAsc(!sortByAsc);
    };

    const handleDelete = (id) => {
        const updatedFilms = films.filter(elem => elem.id !== id);
        setFilms(updatedFilms);
    };

    return (
        <div className='App'>
            <h1>Showing {films.length} movies in the database</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>
                            Rate
                            <i className='bx bx-sort-up' onClick={handleSort}></i>
                        </th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {films.map(film => (
                        <tr key={film.id}>
                            <td>{film.title}</td>
                            <td>{film.genre}</td>
                            <td>{film.stock}</td>
                            <td>{film.rate}</td>
                            <td>
                                <button onClick={() => handleDelete(film.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
