import { useEffect, useState } from "react";
import axios from "axios";
import BlogCards from "./BlogCards";


function Dashboard() {

    let blogs = [
        {
            "blog_id" :"",
            "blog_title" : "",
            "blog_description" : "",
            "blog_image" : "",
        },{
            "blog_id" : "",
            "blog_title" : "",
            "blog_description" : "",
            "blog_image" : "",
        },{
            "blog_id" : "",
            "blog_title" : "",
            "blog_description" : "",
            "blog_image" : "",
        }
    ];


    return (
        <>
            <h1>Dashboard</h1>
            <div className="movie-list">
                    <BlogCards blogs={blogs}/>
                </div>
        </>
    );
}

export default Dashboard;

// API call for search
// https://www.omdbapi.com/?s=zindagi&apikey=527e1786
