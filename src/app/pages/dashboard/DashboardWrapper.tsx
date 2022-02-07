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
  MixedWidget15,
  MixedWidget1,
  StatisticsWidget7,
  StatisticsWidget8
} from '../../../_metronic/partials/widgets'
import ZoomI from '../../modules/zoomAndPan/ZoomI'
import MixedWidget13 from '../../../_metronic/partials/widgets/mixed/MixedWidget13'
import MixedWidget14 from '../../../_metronic/partials/widgets/mixed/MixedWidget14'
import { Zoom } from '@vx/zoom';

const DashboardPage: FC = () => (
  <>
   {/* <Zoom
        width={width}
        height={height}
        scaleXMin={1 / 2}
        scaleXMax={4}
        scaleYMin={1 / 2}
        scaleYMax={4}
        transformMatrix={initialTransform}
      >  */}
      
       {/* <ZoomI
      
      width={700}
      height={1100}
      /> */}



<>


      
   




  {/* begin::Row */}
    <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-3'>
      <StatisticsWidget7
            className='card-xl-stretch mb-xl-8'
            color='blue'
            title='System Time'
            description='Marketing Analysis'
            number='2001'
          />
      </div>
      <div className='col-xxl-3'>
      <StatisticsWidget7
            className='card-xl-stretch mb-xl-8'
            color='orange'
            title='Time Untill Auto Replacement'
            description='Marketing Analysis'
            number='4009'
          />
      </div>
      <div className='col-xxl-3'>
      <StatisticsWidget7
            className='card-xl-stretch mb-xl-8'
            color='green'
            title='Time Until Weekly Commission run'
            description='Marketing Analysis'
            number='209.105.00C'
          />
      </div>
      <div className='col-xxl-3'>
      <StatisticsWidget7
            className='card-xl-stretch mb-xl-8'
            color='pink'
            title='Time Until Monthly Commission run'
            description='Marketing Analysis'
            number='0.00C'
          />
      </div>
    
    </div>
  {/* end::Row */}

     {/* begin::Row */}
     <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
      <MixedWidget1 className='card-xl-stretch mb-xl-8' color='primary' />
     
      </div>
      <div className='col-xxl-4'>
        {/* <ListsWidget5 className='card-xxl-stretch' /> */}
        <MixedWidget2
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
       
      </div>
      <div className='col-xxl-4'>
      <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}


    
  {/* begin::Row */}
  <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-3'>
      <StatisticsWidget7
            className='card-xl-stretch mb-xl-8'
            color='blue'
            title='400k Impressions'
            description='Marketing Analysis'
            number='2003'
          />
      </div>
      <div className='col-xxl-3'>
      <StatisticsWidget7
            className='card-xl-stretch mb-xl-8'
            color='orange'
            title='400k Impressions'
            description='Marketing Analysis'
            number='9922'
          />
      </div>
      <div className='col-xxl-3'>
      <StatisticsWidget7
            className='card-xl-stretch mb-xl-8'
            color='green'
            title='400k Impressions'
            description='Marketing Analysis'
            number='0208C'
          />
      </div>
      <div className='col-xxl-3'>
      <StatisticsWidget7
            className='card-xl-stretch mb-xl-8'
            color='pink'
            title='400k Impressions'
            description='Marketing Analysis'
            number='0.00'
          />
      </div>
    
    </div>
  {/* end::Row */}



  
  {/* begin::Row */}
  <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
      <StatisticsWidget8
            className='card-xl-stretch mb-xl-8'
            color='red'
            title='400k Impressions'
            description='Marketing Analysis'
            number='2001'
          />
      </div>
      <div className='col-xxl-8'>
      <StatisticsWidget8
            className='card-xl-stretch mb-xl-8'
            color='pink'
            title='400k Impressions'
            description='Marketing Analysis'
            number='2899'
          />
      </div>
 
    
    </div>
  {/* end::Row */}


    
  </>
  
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
