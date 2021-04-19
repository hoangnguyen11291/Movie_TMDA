import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import api from "../pages/apiService";

let API_KEY = process.env.REACT_APP_API_KEY;
let IMG = process.env.REACT_APP_DETAIL_IMAGE;
const MovieDetail = () => {
  const params = useParams();
  const movie_ID = params.id;
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMovieDetail = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/movie/${movie_ID}?api_key=${API_KEY}`);
        setMovieDetail(res.data);
      } catch (error) {
        toast.error(error.message);
      }
      setLoading(false);
    };
    getMovieDetail();
  }, [movie_ID]);
  return (
    <container>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <div>
          {movieDetail && (
            <div className="d-flex view">
              <img
                src={`${IMG}${movieDetail.backdrop_path}`}
                alt=""
                className="imgDetail"
              />
              <div className="moviePlaying">
                <h1>{movieDetail.title}</h1>
              </div>
            </div>
          )}
        </div>
      )}
    </container>
  );
};

export default MovieDetail;
