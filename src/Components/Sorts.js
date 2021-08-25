import React from 'react'

function Sorts( { setSort }) {

    const filterStyle = {
    marginBottom: '20px',
    }

    function handleClick(e) {
        setSort(e.target.value)
    }

    return (
        <div style={filterStyle}>
           <button value="top" onClick={handleClick}>🔥 Top</button>
           <button value="new" onClick={handleClick}>✨ New</button>
        </div>
    )
}

export default Sorts
