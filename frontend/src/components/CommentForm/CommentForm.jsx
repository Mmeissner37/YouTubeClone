import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


// let initialValues = {
//     user: {username},
//     comment: "",
// }

const CommentForm = (postUserComment) => {
    const [comment, setComment] = useState("")
    const [user, token] = useAuth()
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {
            user: user.username,
            comment: "",
        };
        console.log(newComment)
        postUserComment(newComment)
    }

    async function postUserComment() {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/comments/HmjUKMTOKig/", {
            headers: {
                Authorization: 'Bearer ' + token
            }
            })
            navigate("/postcomment")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className='form-box'>User: </label>
            <input type='text' value={user.username} onChange={(event) => user(event.target.value)} /><br></br>
            <label className='form-box'>Comment: </label>
            <input type='text' value={comment.text} onChange={(event) => setComment(event.target.value)} />
            <button type='submit'>Post</button>
        </form>
    )

}

export default CommentForm;