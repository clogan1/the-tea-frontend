import React from 'react'

function Sorts( { setSort, sort }) {

    const filterStyle = {
        
    }

    const sortButton = {
        backgroundColor: 'Transparent',
        borderColor: 'none',
        borderStyle: 'none',
        width: '80px',
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
            <button value="new" onClick={handleClick} style={sortButton} className={(sort === 'new' || sort === '')? "selectedCommunityBtn" : "commButton"}>✨ &nbsp;New</button>
            <button value="top" onClick={handleClick} style={sortButton} className={(sort === 'top')? "selectedCommunityBtn" : "commButton"}>🔥 &nbsp;Top</button>
        </div>
    )
}

export default Sorts
