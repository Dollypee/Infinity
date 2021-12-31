

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
// import { PageTitle } from '../../../_metronic/layout/core'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Redirect, Route, Switch} from 'react-router-dom'
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

  import PendingPaymentRequest from '../../modules/profile/components/payout/PendingPaymentRequest'



  const accountBreadCrumbs: Array<PageLink> = [
    {
      title: 'Account',
      path: '/payout/payout_status',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]

const Payout_Status: FC = () => (
  <>
    <div className='card'>
   hhhhh
    {/* <AccountHeader /> */}
    <PendingPaymentRequest/>
      <Switch>
        <Route path='/user/pending_request'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
          <PendingPaymentRequest/>  
        </Route>
        <Route path='/user/approved_pending_payment'>
          {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle> */}
          <PendingPaymentRequest />
        </Route>
        <Route path='/user/pending_request'>
          {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle> */}
          <PendingPaymentRequest />
        </Route>
        <Route path='/user/approved_pending_payment'>
          {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle> */}
          <PendingPaymentRequest />
        </Route>

        <Redirect from='/' exact={true} to='/payout/payout_status' />
        <Redirect to='/payout/payout_status' />
      </Switch>
    </div>
    </>
      
   
  
    

)

const PayoutStatusPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'E-Wallet Status' })}</PageTitle>
      <Payout_Status />
    </>
  )
}

export { PayoutStatusPage }
