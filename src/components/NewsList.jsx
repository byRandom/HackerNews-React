import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NewCard from "./NewCard";

const NewsList = () => {
    const [newsPageData, setNewsPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [displayNumber, setDisplayNumber] = useState(15);
    let handleSubmit = (e) => {
        e.preventDefault();
    };
    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
            .then((res) => res.json())
            .then((data) => {
                let newsArray = [];
                for (let i = 0; i < displayNumber; i++) {
                    if (data[i * page]) newsArray.push(data[i * page]);
                }
                setNewsPageData(newsArray);
            })
            .then(() => {});
    }, [displayNumber, page]);

    console.log(newsPageData);
    return (
        <div className="mt-16">
            <nav className="">
                <section className="">
                    <span>items per page</span>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="number"
                            defaultValue={displayNumber}
                            onChange={(props) => {
                                setDisplayNumber(props.target.value);
                            }}
                            className="mx-4 w-10 "
                        />
                    </form>
                </section>
            </nav>

            {newsPageData.map((element) => {
                return (
                    <>
                        <NewCard key={element} element={element} />
                    </>
                );
            })}
        </div>
    );
};

export default NewsList;
