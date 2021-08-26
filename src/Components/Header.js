import React from 'react'
import { useHistory } from "react-router-dom"

function Header( { activeUser, setActiveUser }) {
    let history = useHistory()

    const {id, username, avatar, created_at} = activeUser

    const logoStyle = {
        float: 'left',
        width: '70%',
        textAlign: 'left',
        padding: '10px', 
        paddingLeft: '20px',
        // fontFamily: 'Source Serif Pro'
    }

    const userdivStyle = {
        textAlign: 'right',
        float: 'left',
        width: '30%',
        padding: '10px', 
        paddingRight: '40px',
        margin: 'auto'
    }

    const avatarstyle = {
        width: '10%',
        height: '10%',
        minWidth: '50px',
        minHeight: '50px',
        borderRadius: '50%',
        overflow: 'hidden',
        objectFit: 'cover',
        backgroundColor: 'white',
    }

    function routeHome(){
        history.push('/')
    }

    function handleChangeUser(){
        let newId = prompt("what is your user ID?")
        fetch(`http://localhost:9292/users/${newId}`)
        .then(res => res.json())
        .then(setActiveUser)
    }


    return (
        <header className="App-header">
            <div className="logodiv" style={logoStyle} onClick={routeHome}>
            <h2>🍵 &nbsp;The Tea</h2>
            </div>
            <div className="userdiv" style={userdivStyle}>
                {/* <p>{username}</p> */}
                <img style={avatarstyle} alt={username} src={avatar} onClick={handleChangeUser}/>
            </div>
            
        </header>
    )
}
export default Header
