import React from 'react'

function Search({ search, setSearch }) {
    return (
        <div>
             <input 
                type="text" 
                placeholder="Search posts..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}
export default Search
