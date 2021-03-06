/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItemWithSub to='/network' title='Network' icon='/media/icons/duotune/general/gen022.svg'>
        <AsideMenuItem to='/network/binary_tree' title='Binary Tree' />
        <AsideMenuItem to='/network/unilevel_tree' title='Unilevel Tree' />
        {/* <AsideMenuItem to='/network/status' title='Unilevel Tree' /> */}
        <AsideMenuItem to='/network/downline_members' title='Downline Members' />
        <AsideMenuItem to='/network/referral_members' title='Referal Members' />
      
      </AsideMenuItemWithSub>


  
      {/* <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div> */}

      <AsideMenuItem
        to='/register/:username'
        icon='/media/icons/duotune/general/gen022.svg'
        title='Register'
        fontIcon='bi-archive'
      />


      <AsideMenuItem
        to='/holding_tank'
        icon='/media/icons/duotune/general/gen022.svg'
        title='Holding Tank'
        fontIcon='bi-archive'
      />

    <AsideMenuItemWithSub to='/e_wallet' title='E-Wallet' icon='/media/icons/duotune/general/gen022.svg'>
        <AsideMenuItem to='/e_wallet/statement' title='E-Wallet Statement' />
        <AsideMenuItem to='/e_wallet/status' title='E-Wallet Status' />
      
      </AsideMenuItemWithSub>

      {/* <AsideMenuItem
        to='/user-earning'
        icon='/media/icons/duotune/general/gen022.svg'
        title='User Earnings'
        fontIcon='bi-archive'
      /> */}

    

      <AsideMenuItemWithSub to='/payout' title='Payout' icon='/media/icons/duotune/general/gen022.svg'>
        <AsideMenuItem to='/payout/request_payout' title='Request Payout' />
        <AsideMenuItem to='/payout/payout_status' title='Payout Status' />
        
      
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub to='/payout' title='Profile Management' icon='/media/icons/duotune/general/gen022.svg'>
        <AsideMenuItem to='/profile_management/view_profile' title='Profile View' />
        {/* <AsideMenuItem to='/profile_management/change_login_password' title='Change Login Password' /> */}
        <AsideMenuItem to='/profile_management/change_transaction_password' title='Change Transaction Pasword' />
        <AsideMenuItem to='/profile_management/subscription_renewal' title='Subscription Renewal' />
        <AsideMenuItem to='/profile_management/package_upgrade' title='Package Upgrade' />
        <AsideMenuItem to='/profile_management/package_downgrade' title='Package Downgrade' />
        <AsideMenuItem to='/profile_management/kyc_details' title='KYC Details' />
      
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/shopping_cart'
        icon='/media/icons/duotune/general/gen022.svg'
        title='Shopping Cart'
        fontIcon='bi-archive'
      >
        <AsideMenuItem to='/shopping_cart/shop' title='Shop' hasBullet={ true} />
        <AsideMenuItem to='/shopping_cart/details' title='Product Details' hasBullet={ true} />
        <AsideMenuItem to='/shopping_cart/cart' title='Cart' hasBullet={ true} />
      </AsideMenuItemWithSub>

<AsideMenuItemWithSub to='/reports' title='Reports' icon='/media/icons/duotune/general/gen022.svg'>
      <AsideMenuItem to='/reports/commission' title='Commission' />
      <AsideMenuItem to='/reports/sales' title='Sales' />
        <AsideMenuItem to='/reports/purchase' title='Purchase' />
        <AsideMenuItem to='/reports/income_statement' title='Income statement' />
       
      
      </AsideMenuItemWithSub>


    <AsideMenuItemWithSub to='/tools' title='Tools' icon='/media/icons/duotune/general/gen022.svg'>
        <AsideMenuItem to='/tools/leads' title='Leads' />
        <AsideMenuItem to='/tools/news' title='News' />
        <AsideMenuItem to='/tools/feedback' title='Feedback' />
      
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/mailbox'
        icon='/media/icons/duotune/general/gen022.svg'
        title='Mail Box'
        fontIcon='bi-archive'
      />

    <AsideMenuItem
        to='/market_analyzer'
        icon='/media/icons/duotune/general/gen022.svg'
        title='Market Analyzer'
        fontIcon='bi-archive'
      />

    <AsideMenuItem
        to='/support_center'
        icon='/media/icons/duotune/general/gen022.svg'
        title='Support Center'
        fontIcon='bi-archive'
      />

      <AsideMenuItem
        to='/logout'
        icon='/media/icons/duotune/general/gen022.svg'
        title='Logout'
        fontIcon='bi-archive'
      />
     

        {/* <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}
