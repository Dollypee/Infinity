

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
    ChartsWidget6
  } from '../../../_metronic/partials/widgets'

const Income_Statement_Page: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
      Income_Statement_Page
      </div>
      {/* begin::Body */}

    <ChartsWidget6
    className='card'
    />
      
   
  
    
    
    </div>
  </>
)

const IncomeStatementPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Income Statement' })}</PageTitle>
      <Income_Statement_Page />
    </>
  )
}

export { IncomeStatementPage }
