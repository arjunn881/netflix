import React, { useEffect, useState } from "react";
import "./ListItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import axios from "axios";

export const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  //const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       const res = await axios.get("/movies/find/" + item, {
  //         headers: {
  //           token:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjM3N2FmOTVmNzRkZTkzYjVlZTI1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzg5MjY3OSwiZXhwIjoxNjk0MzI0Njc5fQ.GZSYdVFPs-9kln5yLuXGcgAMHrZZZWC9uMFkCV67SoE",
  //         },
  //       });
  //       console.log(res);
  //       setMovie(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getMovie();
  // }, [item]);



  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >


      <img src="movie.img" alt="" />

      {isHovered && (
        <>
          <video src="movie.trailer" autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>movie.duration </span>
              <span className="limit">movie.limit</span>
              <span>movie.year</span>
            </div>
            <div className="desc">movie.desc</div>

            <div className="genre">movie.genre</div>
          </div>
        </>
      )}
    </div>
  );
};
