
import MovieCard from "./MovieCards";
import { useEffect, useState } from "react";
import "./css/home.css";
import axios from "axios";

function Home() {
    let [blogs, setBlogs] = useState([]);


    // let movieName = "";
    let blogTitle = "";
    // function searchClick(){
    //     setMovies([]);
    //     movieName =  document.getElementById("search-field").value.replaceAll(' ', '+');
    //     ;
    //     getAllBlogRequest() ;

    //     document.getElementById("search-field").value = "";
    // }

    async function getAllBlogRequest(){
        const response = await fetch("http://localhost:3000/blog");
        const responseJSON = await response.json();
        
        if(responseJSON)
            setBlogs(responseJSON);
    };

    async function getSearchBlogRequest(){
        blogTitle =  document.getElementById("search-field").value;
        axios.post('http://127.0.0.1:3000/blog/searchBlog', {
            blog_title: blogTitle
        })
        .then(response => {setBlogs(response.data);});
    };

    useEffect(()=>{
        getAllBlogRequest();
        console.log(blogs)
    } , []);


    // console.log(movies);

    return (
        <>
            <div id="home">
                <span>
                <button className="add-button" onClick={ ()=>{}}>
                        {/* <Link to="/details">Search</Link> */}
                        Add Post
                    </button>
                    <input
                        id="search-field"
                        type="text"
                        placeholder="Search Movie"
                    ></input>
                    <button className="search-button" onClick={ ()=>{getSearchBlogRequest()}}>
                        {/* <Link to="/details">Search</Link> */}
                        Search
                    </button>
                </span>
                <div className="movie-list">
                    <MovieCard blogs={blogs}/>
                </div>
            </div>
        </>
    );
}

export default Home;

// API call for search
// https://www.omdbapi.com/?s=zindagi&apikey=527e1786
