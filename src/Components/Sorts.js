import React from 'react'

function Sorts( { setSort }) {

    const filterStyle = {
    marginBottom: '20px',
    }

    const sortButton = {
        backgroundColor: 'Transparent',
        borderColor: 'none',
        borderStyle: 'none',
        width: '100px',
        padding: '10px',
        color: 'black',
        borderRadius: '4px',
        textAlign: 'left',
        fontSize: '16px'
    }

    function handleClick(e) {
        setSort(e.target.value)
    }

    return (
        <div style={filterStyle}>
           <button value="top" onClick={handleClick} style={sortButton}>🔥 &nbsp;&nbsp;Top</button>
           <button value="new" onClick={handleClick} style={sortButton}>✨ &nbsp;&nbsp;New</button>
        </div>
    )
}

export default Sorts
