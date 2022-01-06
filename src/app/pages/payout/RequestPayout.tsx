

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import './PaymentRequestBody.css'
import {
    MixedWidget2,
    MixedWidget10,
    MixedWidget11,
    ListsWidget2,
    ListsWidget3,
    ListsWidget4,
    ListsWidget5,
    ListsWidget6,
    TablesWidget5,
    TablesWidget10,
    MixedWidget8,
    PaymentRequestWid,
    TablesWidget13,
    OrderRequestsTable
  } from '../../../_metronic/partials/widgets'

const Request_Payout: FC = () => (
  <>

<div className='PaymentRequestBody'>
      <div className='cardPay'>
      <PaymentRequestWid/>

        </div>

        <div className=''>
        <OrderRequestsTable
        className='card'
        /> 

        </div>
 </div>
    
  </>
)

const PayoutRequestPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'E-Wallet Status' })}</PageTitle>
      <Request_Payout />
    </>
  )
}

export { PayoutRequestPage }
