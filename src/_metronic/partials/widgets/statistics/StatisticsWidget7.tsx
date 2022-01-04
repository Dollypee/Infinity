/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG } from '../../../helpers'

type Props = {
  className: string
  color: string
  title: string
  description: string
  number: string
}

const StatisticsWidget7: React.FC<Props> = ({className, color, title, number}) => {
  return (
    <div className={`card ${className}`} style={{borderBottom: `0.5rem solid ${color}`, borderColor: `red`}}>
      {/* begin::Body */}
      <div className='card-body my-3'>
        {/* <a href='#' className={`card-title fw-bolder text-${color} fs-5 mb-3 d-block`}>
          {description}
        </a> */}

    <div className='' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
  
              <span className='symbol-label bg-lighten'>
                <KTSVG path='/media/icons/duotune/maps/map004.svg' className='svg-icon-1' />
              </span>
   



        <div>
          <button
          style={{color: `${color}`, border: 'none', padding: '0.5rem',}}
          >Show All</button>
        </div>

      </div>
      <div className='py-1'>
        

        <span className='fw-bold  fs-7'>{number}</span>
      </div>
        <div className='py-1'>
        

          <span className='fw-bold text-muted fs-7'>{title}</span>
        </div>

       
      </div>
      {/* end:: Body */}
    </div>
  )
}

export {StatisticsWidget7}
