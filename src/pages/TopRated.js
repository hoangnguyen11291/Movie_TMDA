import React from "react";
import api from "./apiService";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

let API_KEY = process.env.REACT_APP_API_KEY;
let IMG = process.env.REACT_APP_IMAGE;
const settings = {
  dots: true,
  infinite: true,
  // autoplay: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 4,
  pauseOnHover: true,
};

const TopRated = () => {
  const [movie, setMovie] = useState("");
  const [genres, setGenres] = useState(null);
  const history = useHistory();

  const handleClickMovie = (movie_ID) => {
    history.push(`/movie/${movie_ID}`);
  };

  useEffect(() => {
    const getGenres = async () => {
      let url = `/genre/movie/list?api_key=${API_KEY}`;
      const result = await api.get(url);
      setGenres(result.data.genres);
    };
    getGenres();
  }, []);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        let url = `/movie/top_rated?api_key=${API_KEY}`;
        const res = await api.get(url);
        setMovie(res.data.results);
      } catch (err) {
        console.log("This is error:", err);
      }
    };
    getMovieData();
  }, []);
  return (
    <div>
      <div>
        <div>
          <h5 className="top-brand">Top Rated Movies</h5>
        </div>
        <Slider {...settings} className="slider">
          {movie &&
            movie.map((movie) => (
              <div class="container" onClick={() => handleClickMovie(movie.id)}>
                <img
                  src={`${IMG}${movie.backdrop_path}`}
                  alt=""
                  className="imageSlider"
                />
                <div class="middle">
                  <h1 className="text">{movie.title}</h1>
                  <span className="movieDetail">{movie.release_date}</span>
                  <br />
                  <span className="vote">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    {"  "}
                    {movie.vote_average}
                  </span>
                  <br />
                  {genres &&
                    movie.genre_ids.map((genreId) => {
                      const findGenreName = genres.find(
                        (item) => item.id === genreId
                      );
                      return (
                        <span className="space flex-wrap">
                          <Badge variant="danger">{findGenreName.name}</Badge>
                        </span>
                      );
                    })}
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRated;
