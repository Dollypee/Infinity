

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
    TablesWidget13,
    ChartsWidget7
  } from '../../../_metronic/partials/widgets'

const Commission_Page: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
      Commission_Page
      </div>
      {/* begin::Body */}

    <ChartsWidget7
    className='card'
    />
      
   
  
    
    
    </div>
  </>
)

const CommissionPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Commission' })}</PageTitle>
      <Commission_Page />
    </>
  )
}

export { CommissionPage }
