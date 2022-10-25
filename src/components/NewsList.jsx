import React from "react";
import "./NewsList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import NewCard from "./NewCard";

const NewsList = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios
            .get("https://hacker-news.firebaseio.com/v0/newstories.json")
            .then((res) => {
                setNews(res.data);
            });
    }, []);
    const GetNews = () => {
        console.log(news);
    };

    return (
        <div className="newsList">
            {news.map((element) => {
                return (
                    <>
                        <NewCard key={element} element={element} />
                        <br />
                    </>
                );
            })}
        </div>
    );
};

export default NewsList;
