import React from 'react'

function Search({ search, setSearch }) {

    const searchBar = { 
        width: '70%',
        fontSize: '16px',
        fontFamily: 'Roboto',
        borderRadius: '4px',
        borderColor: 'none',
        borderStyle: 'none',
        height: '40px',
        boxShadow: '0 8px 6px -6px gray',
        padding: '5px',
        paddingLeft: '20px',
        marginBottom: '10px'
    }


    return (
        <div>
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
