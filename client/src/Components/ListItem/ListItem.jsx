import React, { useState } from "react";
import "./ListItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

export const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer = "https://youtu.be/oCJiDfs9hKw?si=YFk0AcPIRm35QuCf";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://igimages.gumlet.io/telugu/gallery/movies/sir2021/sirmain.jpg?w=640&dpr=1.0"
        alt=""
      />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14min </span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              doloremque, laboriosam soluta a exercitationem nulla dolore .
            </div>

            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};
