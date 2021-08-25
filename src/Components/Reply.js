import React from 'react'

function Reply({ reply }) {
    
    const { content, created_at, user } = reply

    const replyStyle = {
        border: '1px solid',
        padding: '10px',
        marginTop: '5px',
        marginBottom: '5px'
    }
    
    return (
        <div style={replyStyle} >
            <span> {user.username} | {created_at}</span>
            <p>{content}</p>
        </div>
    )
}

export default Reply
