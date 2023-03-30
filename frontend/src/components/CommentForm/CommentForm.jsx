import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';


let initialValues = {
    user: "",
    comment: "",
}

const CommentForm = (postUserComment) => {
    const [comment, setComment] = useState([])
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postUserComment)


    async function postUserComment() {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/comments/HmjUKMTOKig/", formData, {
            headers: {
                Authorization: 'Bearer ' + token
            }
            })
            navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="commentform">
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    Comment: {" "}
                    <input type="text" value={formData.comment} onChange={handleSubmit}></input>
                </label>
            </form>
            <Link to="/postcomment">Post</Link>
        </div>
    )
}

export default CommentForm;