import React from 'react'
import {KTSVG} from '../../../helpers'
// import './MixedWidget15.css'
import './style.css'

type Props = {
    content1: string
    content2: string
 
  }
  
const PaymentRequestWid: React.FC= () => {
// export default function PaymentRequestWid() {
    return (
   <div className='divMain1'>

    <div   style={{color: 'red', fontSize: '2rem', marginBottom: '1.2rem'}}>Important</div>
    <div style={{color: 'red', fontSize: '1.5rem'}}>
    
   <p>Please make sure that you have updated your Uphold Email before you request your withdrawals. </p> 
    <p>If you do not update the Uphold Email or it is incorrect, this might delay the process and you have to wait longer for your funds to arrive.</p> 

    <p>To do so, please click the Button "Update Uphold Email" below.</p>
    
    </div>


    <a href='#' className='btn btn-primary btn-sm'  style={{marginBottom: '2rem', marginTop: '2rem'}}>
            Update Uphold/ADVCash Email
    </a>


    <div>
      <form action="" style={{display: 'flex', flexDirection: 'row'}}>

        <div style={{display: 'flex', flexDirection: 'column', paddingRight: 10}}>
          <div>
            Withdrawal Amount
          </div>
          <div>
            <button className='inputField' style={{width: '3rem'}}>$</button>
             <input className='inputField' type="text" />
          </div>
            
           
        </div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>
          Transaction Password
          </div>

          <div>
             <input className='inputField'  type="text" />  <button className=' ' style={{backgroundColor: '#009ef7', borderColor: '#009ef7', color: 'white'}} >Withdraw</button>
          </div>
       
           
        </div>
    

     

      </form>
    </div>
       
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