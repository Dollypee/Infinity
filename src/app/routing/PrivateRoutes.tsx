import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { UserEarningPage } from '../pages/user-earnings/UserEarning'
import {RegisterPage} from '../pages/register/Register'
import { E_WalletStatementPage } from '../pages/e-wallet/EWalletStatement'
import { E_WalletStatusPage } from '../pages/e-wallet/EWalletStatus'


import {ReferralNetworkPage} from '../pages/network/ReferralMember'
import {DownlineMembersPage} from '../pages/network/DownlineMembers'
import {UnilevelTreePage} from '../pages/network/UnilevelTree'
import {BinaryTreePage} from '../pages/network/BinaryTree'


import {PayoutRequestPage} from '../pages/payout/RequestPayout'
import {PayoutStatusPage} from '../pages/payout/PayoutStatus'
import {ChangeLoginPasswordPage} from '../pages/profile_management/ChangeLoginPassword'
import {ChangeTransactionPasswordPage} from '../pages/profile_management/ChangeTransactionPassword'
import {KycDetailsPage} from '../pages/profile_management/KycDetails'
import {PackageDowngradePage} from '../pages/profile_management/PackageDowngrade'
import {PackageUpgradePage} from '../pages/profile_management/PackageUpgrade'
import {SubscriptionRenewalPage} from '../pages/profile_management/SubscriptionRenewal'
import { ViewProfilePage } from '../pages/profile_management/ViewProfile'

import ShoppingCartPage from '../pages/shopping_cart/ShoppingCart'

import {SalesPage} from '../pages/reports/Sales'
import {PurchasePage} from '../pages/reports/Purchase'
import {IncomeStatementPage} from '../pages/reports/IncomeStatement'
import {CommissionPage} from '../pages/reports/Commission'

import {FeedbackPage} from '../pages/tools/Feedback'
import {LeadsPage} from '../pages/tools/Leads'
import {NewsPage} from '../pages/tools/News'

import {MailBoxPage} from '../pages/mail_box/MailBox'
import {SupportCenterPage} from '../pages/support_center/SupportCenter'
import {MarketAnalyzerPage} from '../pages/market_analyzer/MarketAnalyzer'



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
        <Route path='/register/:username' component={RegisterPage} />
        <Route path='/e_wallet/statement' component={E_WalletStatementPage} />
        <Route path='/e_wallet/status' component={E_WalletStatusPage} />
        <Route path='/network/referral_members' component={ReferralNetworkPage} />
        <Route path='/network/binary_tree' component={BinaryTreePage} />
        <Route path='/network/downline_members' component={DownlineMembersPage} />
        <Route path='/network/unilevel_tree' component={UnilevelTreePage} />


        <Route path='/payout/request_payout' component={PayoutRequestPage} />
        <Route path='/payout/payout_status' component={PayoutStatusPage} />
        <Route path='/profile_management/kyc_details' component={KycDetailsPage} />
        <Route path='/profile_management/package_downgrade' component={PackageDowngradePage} />
        <Route path='/profile_management/package_upgrade' component={PackageUpgradePage} />
        <Route path='/profile_management/change_transaction_password' component={ChangeTransactionPasswordPage} />
        <Route path='/profile_management/change_login_password' component={ChangeLoginPasswordPage} />
        <Route path='/profile_management/subscription_renewal' component={SubscriptionRenewalPage} />
        <Route path='/profile_management/View_profile' component={ViewProfilePage} />
        <Route path='/profile_management/change_transaction_password' component={ChangeTransactionPasswordPage} />
        <Route path='/shopping_cart' component={ShoppingCartPage} />
        <Route path='/reports/sales' component={SalesPage} />
        <Route path='/reports/purchase' component={PurchasePage} />
          <Route path='/reports/income_statement' component={IncomeStatementPage} />
            <Route path='/reports/commission' component={CommissionPage} />





        <Route path='/tools/news' component={NewsPage} />
        <Route path='/tools/leads' component={LeadsPage} />
        <Route path='/tools/feedback' component={FeedbackPage} />


        <Route path='/mailbox' component={MailBoxPage} />
        <Route path='/support_center' component={SupportCenterPage} />
        <Route path='/market_analyzer' component={MarketAnalyzerPage} />
     



        {/* <Route path='/network/ReferralNetworkPage' component={ReferralNetworkPage} /> */}

        {/* <AsideMenuItem to='/network/binary_tree' title='Binary Tree' />
        <AsideMenuItem to='/network/unilevel_tree' title='Unilevel Tree' />
  
        <AsideMenuItem to='/network/downline_member' title='Downline Members' />
        <AsideMenuItem to='/network/referral_member' title='Referal Members' /> */}



        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
