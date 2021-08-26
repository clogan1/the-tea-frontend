import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

function CreatePost({ communities, activeUser, addPost, setSort }) {

    let history = useHistory();
    const [formData, setFormData] = useState({
        user_id: activeUser.id,
        community_id: 0,
        headline: '',
        content: '',
        image_url: ''
    }
    )

    const formContStyle = {
        padding: '10px',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        textAlign: 'left',
        fontFamily: 'Roboto'
    }

    const postButton = {
        backgroundColor: '#539987',
        padding: '5px',
        borderRadius: '4px',
        borderStyle: 'none',
        fontFamily: 'Roboto',
        height: '50px',
        width: '20%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        float: 'right'
    }

    const inputStyle = {
        fontSize: '16px',
        fontFamily: 'Roboto',
        borderRadius: '4px',
        borderColor: 'none',
        borderStyle: 'none',
        height: '30px',
        boxShadow: '0 8px 6px -6px gray',
        padding: '5px',
        paddingLeft: '20px',
        marginBottom: '20px',
        width: '95%',
        marginTop: '10px'
    }

    const textAreaStyle = {
        fontSize: '16px',
        fontFamily: 'Roboto',
        borderRadius: '4px',
        borderColor: 'none',
        borderStyle: 'none',
        height: '80px',
        boxShadow: '0 8px 6px -6px gray',
        padding: '5px',
        paddingLeft: '20px',
        marginBottom: '20px',
        width: '95%',
        marginTop: '10px'
    }

    const dropdownStyle = {
        width: '30%',
        fontFamily: 'Roboto',
        height: '40px',
        borderRadius: '4px',
        fontSize: '16px',
        marginBottom: '20px',
        borderStyle: 'none',
        boxShadow: '0 8px 6px -6px gray',
    }



    function onChange(e){
        let name = e.target.name
        let value = e.target.value
        setFormData({...formData, [name]: value})
    }
    function onCommunityChange(e){
        //console.log(parseInt(e.target.value))
        setFormData({...formData, community_id: parseInt(e.target.value)})
    }

    function handleSubmit(e){
        e.preventDefault()

        let newPost = formData
        //console.log(newPost)

        fetch(`http://localhost:9292/posts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(post => addPost(post))

        setFormData({
            user_id: activeUser.id,
            community_id: 0,
            headline: '',
            content: '',
            image_url: ''
        })
        setSort('new')
        history.push('/')
    }

    return (
        <div style={formContStyle}>
           <h2>Create Post</h2>
           <form onSubmit={handleSubmit}>
               <select name="community_id" onChange={onCommunityChange} value={formData.community_id} style={dropdownStyle}>
               <option value="0"> Choose a Community </option>
               {communities.map(community => {
                   return(
                       <option key={community.id} value={community.id}>{community.name}</option>
                   )
               })}
               </select>
               <br></br>
                <label>Headline:</label><br></br>
                <input style={inputStyle} type="text" id="headline" name="headline" onChange={onChange} value={formData.headline}></input><br></br>
                <label>Text:</label><br></br>
                <textarea style={textAreaStyle} type="text" id="text" name="content" onChange={onChange} value={formData.content}></textarea> <br></br>
                <label>Image URL:</label><br></br>
                <input style={inputStyle} type="text" id="image" name="image_url" onChange={onChange} value={formData.image_url}></input> <br></br>
                <br></br>
                <button style={postButton} type="submit">Post</button>
           </form>
        </div>
    )
}

export default CreatePost
