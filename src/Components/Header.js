import React from 'react'


function Header( { activeUser }) {
    //console.log(activeUser)

    const {id, username, avatar, created_at} = activeUser

    const logoStyle = {
        float: 'left',
        width: '70%',
        textAlign: 'left',
        padding: '10px', 
        paddingLeft: '20px',
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
        minWidth: '50px',
        borderRadius: '50%',
        overflow: 'hidden',
        objectFit: 'cover',
        backgroundColor: 'white',
    }

    return (
        <header className="App-header">
            <div className="logodiv" style={logoStyle}>
            <h2>The Tea</h2>
            </div>
            <div className="userdiv" style={userdivStyle}>
                {/* <p>{username}</p> */}
                <img style={avatarstyle} alt={username} src={avatar}/>
            </div>
            
        </header>
    )
}
export default Header
