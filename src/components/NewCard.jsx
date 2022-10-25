import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./NewCard.css";
const NewCard = ({ element }) => {
    const [newData, setNewData] = useState({
        by: "",
        descendants: "",
        id: 0,
        kids: [0],
        score: 0,
        time: 0,
        title: "",
        type: "",
        url: "",
    });
    const getNewData = (newId) => {
        axios
            .get(
                `https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`
            )
            .then((res) => {
                setNewData(res.data);
            });
    };
    useEffect(() => {
        getNewData();
    }, []);
    {
        if (newData.text) {
            return (
                <div className="newItem question">
                    <a href={newData.url}>{newData.title}</a>
                    <p>{newData.text}</p>
                </div>
            );
        } else {
            return (
                <div className="newItem">
                    <a href={newData.url}>{newData.title}</a>
                </div>
            );
        }
    }
};

export default NewCard;
