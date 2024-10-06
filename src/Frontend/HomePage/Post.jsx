import React, { useState } from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  const handleSave = () => {
    setSaved(!saved); // Toggle save state
  };

  return (
    <div className="post">
      <img className="postimg" src="https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image not found" />

      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategories">Life</span>
          <span className="postCategories">Moments</span>
        </div>
        <Link className="link" to='/post/:id'>
            <span className="postTitle">Leave only footprints, not memories of life!</span>
        </Link>
        <hr />

        <div className="postActions">
          <button onClick={handleLike} className={`likeButton ${isLiked ? "liked" : ""}`}>
            <i className={`fa${isLiked ? "s" : "r"} fa-heart`}></i> {likes}
          </button>
        <span className="postDate">1 hour ago</span>
        </div>
      </div>
    </div>
  );
}



// import "./post.css"

// export default function Post() {
//   return (
//     <div className="post">
//         <img className="postimg" src="./assests/img1.jpg" alt="" />

//         <div className="postInfo">
//             <div className="postCategories">
//                 <span className="postCategories">Life</span>
//                 <span className="postCategories">Moments</span>
//             </div>
//             <span className="postTitle">Leave only footprints, not memories of life!</span>
//             <hr/>
//             <span className="postDate">1 hour ago</span>

//         </div>
//     </div>
//   )
// }
