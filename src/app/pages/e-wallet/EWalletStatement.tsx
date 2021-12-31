/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
const faker = require('faker');


const E_WalletStatement: FC = () => {
  const [transaction, setTransaction] = React.useState([])
  useEffect(() => {
    let datalength = 30
    let sn = 1;
    const userEarnings = [... Array(datalength)] 
                     .map(_ => ({ 
                         sn: sn++,
                         description: faker.random.words(),
                         amount: faker.commerce.price(),
                       transactionDate: new Date(faker.date.recent()).toDateString(),
                         balance: faker.commerce.price(),
                     }));
    setTransaction(userEarnings) 
  
  }, [setTransaction])

  return (
    <>
    <div className='card'>
   
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
                  <th className='min-w-300px'>Description</th>
                  <th className='min-w-125px'>Amount</th>
                  <th className='min-w-250px'>Transaction Date</th>
                  <th className='min-w-125px rounded-end'>Balance</th>
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
                        {trans.description}
                    </a>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {`+$` + trans.amount}
                    </a>
                    </td>
                    <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {trans.transactionDate}
                    </a>
                    </td>
                    <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {`$` + trans.balance}
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

const E_WalletStatementPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'E-Wallet Statement' })}</PageTitle>
      <E_WalletStatement />
    </>
  )
}

export { E_WalletStatementPage }
