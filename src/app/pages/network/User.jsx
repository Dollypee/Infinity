import React from 'react'
import Active from './active.jpg'
import Avatar from '@mui/material/Avatar'
import './Index.css'

function User({name}) {
  return (
    <div className='User'>
      <div className='userImage'>
        <Avatar className='Avatar' alt='Bamzz_One' src={Active} />
      </div>
      <div className='userName'>{name?name:''}</div>
    </div>
  )
}

export default User
