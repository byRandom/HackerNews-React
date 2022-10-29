import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
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
    const getNewData = () => {
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
                <li className="list-item mx-10 list-none border-4 rounded-xl shadow-xl mt-4">
                    <div className="author float-right">
                        <span className="">{newData.by}</span>
                    </div>
                    <div className="text-center">
                        <div className="font-bold">{newData.title}</div>
                        <div className="font-sans m-2 p-2 border-2 border-orange-300 rounded-xl">
                            {parse(newData.text)}
                        </div>
                    </div>
                </li>
            );
        } else {
            return (
                <li className="list-item mx-10 list-none border-4 rounded-xl shadow-xl mt-4">
                    <span className="author float-right">{newData.by}</span>
                    <div className="text-center">
                        <div className="font-bold">
                            <a href={newData.url}>{newData.title}</a>
                        </div>
                    </div>
                </li>
            );
        }
    }
};

export default NewCard;
