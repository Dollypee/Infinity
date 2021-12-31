import React from 'react'
import {KTSVG} from '../../../helpers'
// import './MixedWidget15.css'

type Props = {
    content1: string
    content2: string
 
  }
  
const PaymentRequestWid: React.FC= () => {
// export default function PaymentRequestWid() {
    return (
   <div className='divMain1'>

    <div >Important</div>
    <div>
    Please make sure that you have updated your Uphold Email before you request your withdrawals.
    If you do not update the Uphold Email or it is incorrect, this might delay the process and you have to wait longer for your funds to arrive.

    To do so, please click the Button "Update Uphold Email" below.
    </div>

    <a href='#' className='btn btn-primary btn-sm'>
            File Manager
    </a>
       
    {/* <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button> */}
        
        
    </div>
    )
}

export {PaymentRequestWid}