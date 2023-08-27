import React from "react";
import "./Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const Featured = ({ type }) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
      <img
        width="100%"
        src="https://img.freepik.com/free-photo/collage-with-cars-seaside_23-2150385868.jpg?w=740&t=st=1693072516~exp=1693073116~hmac=1350ce7d95486106cc3f20b629a49ae51f5696825284653761088a27afa65cc3"
        alt=""
      />
      <div className="info">
        <img src="" alt="" />
        <span className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit quas eligendi soluta magnam similique vel placeat id nemo sapiente eos commodi dolor, expedita libero pariatur veritatis ullam repellat unde.</span>
        <div className="buttons">
            <button className="play">
                <PlayArrowIcon/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlinedIcon/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
};
