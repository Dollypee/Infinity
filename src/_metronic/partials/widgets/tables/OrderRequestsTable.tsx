/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
}

const OrderRequestsTable: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
       
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          {/* begin::Menu 2 */}
          <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px'
            data-kt-menu='true'
          >
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content fs-6 text-dark fw-bolder px-3 py-4'>Quick Actions</div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mb-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Ticket
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Customer
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div
              className='menu-item px-3'
              data-kt-menu-trigger='hover'
              data-kt-menu-placement='right-start'
              data-kt-menu-flip='left-start, top'
            >
              {/* begin::Menu item */}
              <a href='#' className='menu-link px-3'>
                <span className='menu-title'>New Group</span>
                <span className='menu-arrow'></span>
              </a>
              {/* end::Menu item */}
              {/* begin::Menu sub */}
              <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Admin Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Staff Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Member Group
                  </a>
                </div>
                {/* end::Menu item */}
              </div>
              {/* end::Menu sub */}
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Contact
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mt-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content px-3 py-3'>
                <a className='btn btn-primary btn-sm px-4' href='#'>
                  Generate Reports
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
              
               
                <th className='min-w-140px'>Particulars</th>
                <th className='min-w-120px'>Amount</th>
              
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
              
              
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    E-wallet Balance
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                
                <td className='text-dark fw-bolder text-hover-primary fs-6'>€ 3,433.57</td>
                
              </tr>
              <tr>
            
              
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                  Ewallet Amount Already in Payout Process
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                
                <td className='text-dark fw-bolder text-hover-primary fs-6'>€ 0.00</td>
              </tr>
              <tr>
            
              
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                  Paid Amount
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                
                <td className='text-dark fw-bolder text-hover-primary fs-6'>€ 0.89</td>
              </tr>
              <tr>
             
              
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                  Preferred Payout Method
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                
                <td className='text-dark fw-bolder text-hover-primary fs-6'> ADVCash</td>
              </tr>
              <tr>
              
              
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                  Minimum Withdrawal Amount
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                
                <td className='text-dark fw-bolder text-hover-primary fs-6'>€ 0.01</td>
              </tr>

              <tr>
             
              
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                  Payout Fee
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                
                <td className='text-dark fw-bolder text-hover-primary fs-6'>2.5% of Withdrawal Amount </td>
              </tr>
              <tr>
             
              
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    Payin
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                
                <td className='text-dark fw-bolder text-hover-primary fs-6'>2.5% of Withdrawal Amount</td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {OrderRequestsTable}
