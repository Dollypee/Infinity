import React from 'react'
import './Index.css'

function SearchUser() {
    return (
        <div className='searchUser'>
            <form action="">
                <label htmlFor="">Username</label>
                <div className="container">
                    <input type="text" />
                    <div className="btn">Search</div>
                    <div className="btn right">Clear</div>
                </div>
            </form>
        </div>
    )
}

export default SearchUser
