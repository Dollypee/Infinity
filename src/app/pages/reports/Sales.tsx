

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
    ChartsWidget2
  } from '../../../_metronic/partials/widgets'

const Sales_Page: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
      Sales_Page      </div>
      {/* begin::Body */}

    <ChartsWidget2
    className='card'
    />
      
   
  
    
    
    </div>
  </>
)

const SalesPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Sales' })}</PageTitle>
      <Sales_Page />
    </>
  )
}

export { SalesPage }
