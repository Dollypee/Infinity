import React from 'react'
import './Index.css'

function CustomSearch() {
  return (
    <div className='customSearch'>
      <form action=''>
        <div className='mainContainer'>
          <div className='container'>
            <label htmlFor=''>Name</label>
            <input type='text' />
          </div>
          <div className='container'>
            <label htmlFor=''>Product Role</label>
            <select name='' id=''>
              <option value=''>Any</option>
              <option value=''>Any</option>
            </select>
          </div>
          <div className='container'>
            <label htmlFor=''>Is Affiliate</label>
            <select name='' id=''>
              <option value=''>Any</option>
              <option value=''>Any</option>
            </select>
          </div>
          <div className='container'>
            <label htmlFor=''>Customer Subscription</label>
            <select name='' id=''>
              <option value=''>overall</option>
              <option value=''>overall</option>
            </select>
          </div>
          <div className='container buttons'>
            <div className='btn'>Search</div>
            <div className='btn right'>Clear</div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CustomSearch
