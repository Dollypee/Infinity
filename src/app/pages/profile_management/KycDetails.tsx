

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
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
    MixedWidget12,
    TablesWidget13
  } from '../../../_metronic/partials/widgets'

const Kyc_Details_Page: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
      Kyc_Details_Page
      </div>
      {/* begin::Body */}

    <TablesWidget13
    className='card'
    />
      
   
  
    
    
    </div>
  </>
)

const KycDetailsPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'YC details' })}</PageTitle>
      <Kyc_Details_Page />
    </>
  )
}

export { KycDetailsPage }
