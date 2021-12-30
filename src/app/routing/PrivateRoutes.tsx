import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { UserEarningPage } from '../pages/user-earnings/UserEarning'
import {RegisterPage} from '../pages/register/Register'
import { E_WalletStatementPage } from '../pages/e-wallet/EWalletStatement'
import { E_WalletStatusPage } from '../pages/e-wallet/EWalletStatus'

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />

        <Route path="/user-earning" component={UserEarningPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/e_wallet/statement' component={E_WalletStatementPage} />
        <Route path='/e_wallet/status' component={E_WalletStatusPage} />


        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
