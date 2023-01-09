import React, { useState, UseEffect, useEffect } from "react";
import axios from 'axios'

const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idfromButton, setfromButton] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfromButton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idfromButton])
    const handleClick = () => {
        setfromButton(id)
    }

    return (
        <>
            <div>
                <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
                {/* <ul>
                    {
                        post.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))
                    }
                </ul> */}
                <button type="button" className="btn1" onClick={handleClick}>Fetch Post</button>
                <div className="request">{post.title}</div>

            </div>

        </>
    )
}

export default DataFetching