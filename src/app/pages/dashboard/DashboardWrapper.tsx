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
import ZoomI from '../../modules/zoomAndPan/ZoomI'
import MixedWidget13 from '../../../_metronic/partials/widgets/mixed/MixedWidget13'
import MixedWidget14 from '../../../_metronic/partials/widgets/mixed/MixedWidget14'

const DashboardPage: FC = () => (
  <>
  <div className='' >
  <div className=''>
          <MixedWidget12
          content1='System Time'
          content2='Time Until autoreplacement'
          content3='Time until weekly commision'
          content4='Time until monthly commision'
        />
        
      </div>
  </div>
  <div className=''>
  <div className=''>
        <MixedWidget13/>
      
      </div>

  </div>
{/* ////////////////// */}
  <div className='' >
  <div className=''>
  <MixedWidget12
          content1='Earnings previous month ( estimated ) '
          content2='Earningscurrent month ( estimated ) '
          content3='Total Earnings'
          content4='E-Wallet Balance'
      />
        
      </div>
  </div>

  {/* //////////////////////// */}

  <div className='' >
  <div className=''>
      <MixedWidget14
       
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
