import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";

import { API_KEY, img_url } from "../../constants/constants";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(function (response) {
        // console.log(response.data.results[0]);
        setMovie(response.data.results);
        setMovie(
          response.data.results.sort(function (a, b) {
            return 0.5 - Math.random();
          })[0]
        );
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${
          movie ? img_url + movie.backdrop_path : "not found"
        })`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="mtitle">{movie ? movie.title : ""}</h1>
        <div className="banner_button">
          <button className="button">Play</button>
          <button className="button">my list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
