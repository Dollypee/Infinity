

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, Fragment} from 'react'
import { useIntl } from 'react-intl'
// import { PageTitle } from '../../../_metronic/layout/core'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Redirect, Route, Switch,  HashRouter as Router, Link} from 'react-router-dom'
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
      title: 'Payout',
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

const Payout_Status: FC = (props) => (
  <>
    <div className='card'>

      
  
    {/* <AccountHeader /> */}
    {/* <PendingPaymentRequest/>   */}

        <Router >
        <div >
        <nav className='features-routes-links' >
        <ul className='features-links'>
          
            <Link style={{ paddingRight: '1rem', borderWidth: '1rem'}} className='features-link first' to="/user/pending_withdrawal_request">Pending Request</Link>
         
            <Link style={{paddingRight: '1rem'}} className='features-link' to="/user/my_withdrawal_request">Approved - Pending Payment</Link>
         
            <Link style={{paddingRight: '1rem'}} className='features-link' to="/user/approved_withdrawal_request">Approved - Paid</Link>
          
            <Link  style={{ paddingRight: '1rem'}}className='features-link' to="/user/rejected_withdrawal_request">Rejected Requests</Link>
     
        </ul>
    </nav>

      <div className=''>
      <Switch  >
  
      <Route path ="/" exact component={PendingPaymentRequest}/>
      <Route exact path="/user/pending_withdrawal_request" component={MixedWidget11}/>
      <Route exact path='/user/my_withdrawal_request' component={TablesWidget10}/>
      <Route exact path='/user/approved_withdrawal_request' component={ListsWidget3}/>
      <Route exact path='/user/rejected_withdrawal_request' component={ListsWidget5}/>
      </Switch>
      </div>
      </div>
    </Router> 



  
     
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
