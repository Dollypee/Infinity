/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
const faker = require('faker');

const UserEarning = () => {
  const [transaction, setTransaction] = React.useState([])
  
  useEffect(() => {
    let datalength = 30
    let sn = 1;
    const userEarnings = [... Array(datalength)] 
                     .map(_ => ({ 
                         sn: sn++,
                         category: faker.commerce.department(),
                         amount: faker.commerce.price(),
                         transactionDate: new Date(faker.date.recent()).toDateString(),
                     }));
    setTransaction(userEarnings) 
  
  }, [setTransaction])
  console.log(transaction)
  
  return (
    <>
      <div className='card'>

        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            {/* <span className='card-label fw-bolder fs-3 mb-1'>User Earnings</span> */}
            {/* <span className='text-muted mt-1 fw-bold fs-7'>Over 500 new members</span> */}
          </h3>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-rounded table-striped border align-middle gs-7 gy-7'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bolder text-gray-800 border-bottom border-gray-200 bg-light'>
                  <th className='ps-4 min-w-100px rounded-start'>S/N</th>
                  <th className='min-w-200px'>Category</th>
                  <th className='min-w-125px'>Amount</th>
                  <th className='min-w-200px'>Transaction Date</th>
                  {/* <th className='min-w-200px text-end rounded-end'></th> */}
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {transaction.map((trans, i) => (
                  <tr key={i}>
                    <td><div className='d-flex align-items-center'>
                   
                      <div className='d-flex justify-content-start flex-column'>
                        {trans.sn}
                      </div>
                    </div></td>
                    <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {trans.category}
                    </a>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {`$` + trans.amount}
                    </a>
                    </td>
                    <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {trans.transactionDate}
                    </a>
                  </td>
                  </tr>
                ))}
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
        {/* begin::Body */}
  
  
    
    
      </div>
    </>
  )
}

const UserEarningPage = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'User Earnings' })}</PageTitle>
      <UserEarning />
    </>
  )
}

export { UserEarningPage }


