import React from 'react'

function Reply({ reply }) {
    
    const { content, created_at, user } = reply


    const replyStyle = {
        padding: '10px',
    }

    const replyAvatar ={
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        overflow: 'hidden',
        objectFit: 'cover',
        backgroundColor: 'white',
        float: 'left',
        marginTop: '10px'
    }

    const replyHeader={
        height: '20px',
        margin: 'auto',
        fontFamily: 'Roboto'
    }

    const usernameStyle = {
        fontWeight: 'bold',
        float: 'left'
    }

    const dateStyle = {
        color: '#BDC7C3',
        float: 'left'
    }

    const contentStyle ={
        marginLeft: '40px'
    }

    const date = new Date(created_at)
    const replyDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(date)
    
    return (
        <div style={replyStyle} >
            <div style={replyHeader}>
                <img src={user.avatar} alt={user.username} style={replyAvatar}/>
                <p style={usernameStyle}><b>&nbsp;&nbsp;&nbsp;{user.username}   &nbsp;&nbsp;&nbsp;</b></p>
                <p style={dateStyle}>{replyDate}</p>
            </div>
            <br></br>
            <p style={contentStyle}>{content}</p>
        </div>
    )
}

export default Reply
