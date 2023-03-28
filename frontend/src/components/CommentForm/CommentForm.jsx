import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const CommentForm = (postUserComment) => {
    const [comment, setComment] = useState([]);
    const [user, token] = useAuth();
    const navigate = useNavigate()
    
    function handleSubmit(event) {
        event.preventDefault(); 
        let newComment = {
            comment: comment,
        }
        userComment(newComment)
    }

    async function userComment(newComment) {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/comments/HmjUKMTOKig/", newComment, {
            headers: {
                Authorization: 'Bearer' + token
            }
            })
            navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="commentform">
            <form onSubmit={handleSubmit}>
                <label>Comment</label>
                <input type='text' value={comment} onChange={(event) => setComment(event.target.value)} /><br></br>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CommentForm;