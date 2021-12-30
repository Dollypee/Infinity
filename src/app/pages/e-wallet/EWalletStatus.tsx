/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const E_WalletStatus: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
        E-Wallet Status
      </div>
      {/* begin::Body */}
  
  
    
    
    </div>
  </>
)

const E_WalletStatusPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'E-Wallet Statement' })}</PageTitle>
      <E_WalletStatus />
    </>
  )
}

export { E_WalletStatusPage }
