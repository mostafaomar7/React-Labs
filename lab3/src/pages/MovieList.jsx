import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { instance } from '../api/axiosInstance';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance.get('/movie/popular')
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading movies...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
        <h1>Welcome to our movie app</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      </div>

      <h2>Popular Movies</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
        gap: '20px',
        marginTop: '20px'
      }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '5px', 
            overflow: 'hidden',
            position: 'relative'
          }}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '10px' }}>
                <h3 style={{ margin: '5px 0', fontSize: '16px' }}>{movie.title}</h3>
                <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>{movie.release_date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
