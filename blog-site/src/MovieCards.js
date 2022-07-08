import {Link } from "react-router-dom";

import "./css/movieCard.css";

function MovieCard({ blogs }) {


    return (
        <>
            {blogs.map((blog, index) => {
                return (
                    <div
                        className="main"
                        // style={{backgroundImage: `url(${blog.blog_image})` }}
                    // 
                    >

                        <Link to={{pathname:`/details?imdbID=${blog.blog_id}` }}>
                            <div className="link-container">
                            <div className="poster-content">
                                <div className="movie-title">{blog.blog_title}</div>
                                {/* <img
            class="rating"
            src="http://www.pngmart.com/files/7/Rating-Star-PNG-Transparent-Image.png"
          /> */}
                        <div className="description">
                            {blog.blog_description}
                        </div>
                            
                            </div>
                        </div>
                        </Link>
                    </div>
                );
            })}
        </>
    );
}

export default MovieCard;
