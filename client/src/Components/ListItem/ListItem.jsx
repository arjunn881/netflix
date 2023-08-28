import React from "react";
import "./ListItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

export const ListItem = () => {
  return (
    <div className="listItem">
      <img
        src="https://igimages.gumlet.io/telugu/gallery/movies/sir2021/sirmain.jpg?w=640&dpr=1.0"
        alt=""
      />

      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon/>
          <AddIcon/>
          <ThumbUpOutlinedIcon/>
          <ThumbDownAltOutlinedIcon/>
        </div>
      </div>
    </div>
  );
};
