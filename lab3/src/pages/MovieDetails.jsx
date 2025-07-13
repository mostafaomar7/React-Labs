import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../api/axiosInstance";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get(`/movie/${id}`)
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch movie details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Loading movie details...
      </div>
    );
  if (!movie)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        No movie found.
      </div>
    );

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ flex: "0 0 300px" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <div style={{ flex: "1", padding: "20px" }}>
          <h1 style={{ marginBottom: "10px" }}>{movie.title}</h1>

          <p style={{ color: "#666", marginBottom: "20px" }}>
            Released on {movie.release_date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
