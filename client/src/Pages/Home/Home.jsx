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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjM3N2FmOTVmNzRkZTkzYjVlZTI1YSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTM3MzkxNzYsImV4cCI6MTY5NDE3MTE3Nn0.8oQkk4xNPLNOT7OX3NLtDVxJGn6UeosWwB3YEXrysP8",
            },
          }
        );
        console.log(res.data);
        // setLists(res.data)
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
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};
