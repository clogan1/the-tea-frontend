import React from 'react'

function Search({ search, setSearch }) {

    const searchContainer = {
     float: 'right',
     width: '80%'
    }
    const searchBar = { 
        width: '80%',
        fontSize: '16px',
        fontFamily: 'Roboto',
        borderRadius: '4px',
        borderColor: 'none',
        borderStyle: 'none',
        height: '40px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        padding: '5px',
        paddingLeft: '20px',
        marginBottom: '10px'
    }


    return (
        <div style={searchContainer}>
             <input 
                style={searchBar}
                type="text" 
                placeholder="Search posts..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}
export default Search
