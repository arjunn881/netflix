import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Featured } from "../../Components/Featured/Featured";
import { List } from "../../Components/List/List";
import axios from "axios";

export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRamdomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjM3N2FmOTVmNzRkZTkzYjVlZTI1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTIwOTU1NywiZXhwIjoxNjk1NjQxNTU3fQ.4IoGLrk2Nc4V9Novpb3isk9WhzUtjtENZ0ap2RKh3ws",
            },
          }
        );
        console.log(res.data);
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRamdomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />

      <>
        <div style="position:relative;width:fit-content;height:fit-content;">
          <a
            style="position:absolute;top:20px;right:1rem;opacity:0.8;"
            href="https://clipchamp.com/watch/IOKhqqCdBrb?utm_source=embed&utm_medium=embed&utm_campaign=watch"
          >
            <img
              loading="lazy"
              style="height:22px;"
              src="https://clipchamp.com/e.svg"
              alt="Made with Clipchamp"
            />
          </a>
          <iframe
            allow="autoplay;"
            allowfullscreen
            style="border:none"
            src="https://clipchamp.com/watch/IOKhqqCdBrb/embed"
            width="640"
            height="360"
          ></iframe>
        </div>
      </>

      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
};
