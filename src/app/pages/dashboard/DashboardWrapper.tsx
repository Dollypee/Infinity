/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
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
  MixedWidget15
} from '../../../_metronic/partials/widgets'
// import MixedWidget12 from '../../../_metronic/partials/widgets/mixed/MixedWidget12'
import MixedWidget13 from '../../../_metronic/partials/widgets/mixed/MixedWidget13'
import MixedWidget14 from '../../../_metronic/partials/widgets/mixed/MixedWidget14'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
          <MixedWidget12
          content1='System Time'
          content2='Time Until autoreplacement'
          content3='Time until weekly commision'
          content4='Time until monthly commision'
      />
        
      </div>
      <div className='col-xxl-4'>
        <MixedWidget13/>
      
      </div>

      <div className='col-xxl-4'>
          <MixedWidget12
          content1='Earnings previous month ( estimated ) '
          content2='Earningscurrent month ( estimated ) '
          content3='Total Earnings'
          content4='E-Wallet Balance'
      />
        
      </div>

      <div className='col-xxl-4'>
          <MixedWidget14
       
          />
        
      </div>

      <div className='col-xxl-4'>
          <MixedWidget15

          content1='HP Pool Stats'
          content2='Teamperformance'

          />
        
      </div>

      <div className='col-xxl-4'>
          <MixedWidget15

          content1='Commission Calender'
          content2='News'

          />
        
      </div>

  
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
