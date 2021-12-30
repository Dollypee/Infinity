/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const Register: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
        REGISTER CONTAINER
      </div>
      {/* begin::Body */}
  
  
    
    
    </div>
  </>
)

const RegisterPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Register' })}</PageTitle>
      <Register />
    </>
  )
}

export { RegisterPage }
