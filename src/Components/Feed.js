import React from 'react'
import Filters from './Filters'
import PostContainer from './PostContainer'

function Feed() {
    return (
        <div>
            <div className="leftNav">
            left nav
            </div>
            <div className="feedContainer">
                <Filters />
                <PostContainer />
            </div>
        </div>
    )
}

export default Feed
