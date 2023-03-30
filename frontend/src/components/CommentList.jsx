import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const CommentList = (props) => {
  const [comment, setComment] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getAllComments();
  }, []);

  async function getAllComments() {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/comments/HmjUKMTOKig/",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response.data);
    setComment(response.data);
  }

  return (
    <>
      {comment.map((comment) => (
        <ul className="comment-list">
          <h4><li>User: {comment.user.username}</li></h4>
          <h4><li>Comment: {comment.text}</li></h4>
        </ul>
      ))}
    </>
  );
};
export default CommentList;

// const CommentList = (props) => {
//     const [comment, setComment] = useState([]);
//     const [user, setUser] = useState([]);
//     useEffect(() => {
//         getAllComments();
//     }, []);
//     async function getAllComments() {
//         const response = await axios.get("http://127.0.0.1:8000/api/comments/HmjUKMTOKig/");
//         setComment(response.data)
//     }
//     return (
//         <div>
//             <h5 className='getcomments'>Comments</h5>
//             <CommentForm />
//         </div>
//     )
// }
// export default CommentList
