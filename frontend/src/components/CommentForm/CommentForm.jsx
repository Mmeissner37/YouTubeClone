import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './CommentForm.css'

const CommentForm = (postUserComment) => {
    const [text, setText] = useState("")
    const [videoID, setVideoID] = useState("HmjUKMTOKig")
    const [user, token] = useAuth()
    const navigate = useNavigate()

    function handleSubmit(event) {
        let newComment = {
            user: user.username,
            text: text,
            video_id: "HmjUKMTOKig",
        };
        console.log(newComment)
        postUserComment(newComment)
    }

    async function postUserComment(newComment) {
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/${videoID}/`, newComment, {
            headers: {
                Authorization: 'Bearer ' + token
            }
            })
            navigate("/")
        } catch (error) {
            console.log(error.response.data)
        }
    }
//This form doesn't work. I keep getting an error that says the text field may not be blank???
    return (
        <div className='comment-form'> 
        <h4>Please log-in to leave a comment</h4><br></br>
            <form onSubmit={handleSubmit}>
                <label className='form-box'>User: </label>
                <input type='text' value={user.username} onChange={(event) => user(event.target.value)} /><br></br>
                <label className='form-box'>Comment: </label>
                <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
                <button onChange={handleSubmit}>Post</button>
            </form>
        </div>
    )
}

export default CommentForm;