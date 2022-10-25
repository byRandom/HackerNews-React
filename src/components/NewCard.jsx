import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./NewCard.css";
import parse from "html-react-parser";
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
                <li className="list-group-item d-flex justify-content-between align-items-start ">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{newData.title}</div>
                        {parse(newData.text)}
                    </div>
                    <div className="ms-2 me-auto">
                        <span className="badge bg-primary rounded-pill">
                            {newData.by}
                        </span>
                    </div>
                </li>
            );
        } else {
            return (
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">
                            <a href={newData.url}>{newData.title}</a>
                        </div>
                    </div>
                    <span className="badge bg-primary">{newData.by}</span>
                </li>
            );
        }
    }
};

export default NewCard;
