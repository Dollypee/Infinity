import React from 'react'
import './Index.css'
import Avatar from '@mui/material/Avatar'
import Active from './active.jpg'
import Inactive from './inactive.png'


function MemberStatus() {
    return (
        <div style={{display: "flex", margin: "auto"}}>
            <div className='memberStatus'>
            <div className="title">Member Status</div>
            <div className="memberType">
                <div className="members">
                <Avatar className='Avatar' alt='Bamzz_One' src={Active} />
                    <div className="type">Active</div>
                </div>
                <div className="members two">
                <Avatar className='Avatar' alt='Bamzz_One' src={Inactive} />
                    <div className="type">Inactive</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MemberStatus
