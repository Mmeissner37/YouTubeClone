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
    <div className="commentlist">
      {comment.map((comment) => (
        <ul key={comment.id}>
          User: {comment.user.username}<br></br>
          Comment: {comment.text}
          <br></br>
        </ul>
      ))}
    </div>
  );
};
export default CommentList;
