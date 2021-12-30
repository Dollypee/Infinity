/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const E_WalletStatement: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
        E-Wallet Statement
      </div>
      {/* begin::Body */}
  
  
    
    
    </div>
  </>
)

const E_WalletStatementPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'E-Wallet Statement' })}</PageTitle>
      <E_WalletStatement />
    </>
  )
}

export { E_WalletStatementPage }
