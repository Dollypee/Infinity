

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

  import { UserMenu } from '../../../_metronic/partials'

const Change_Login_Password_Page: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
      Change_Login_Password_Page
      </div>
      {/* begin::Body */}

    <TablesWidget10
    className='card'
    />
      
   
  
    
    
    </div>
  </>
)

const ChangeLoginPasswordPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'change Password' })}</PageTitle>
      <Change_Login_Password_Page />
    </>
  )
}

export { ChangeLoginPasswordPage }
