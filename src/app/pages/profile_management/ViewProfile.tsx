

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Dropdown1} from '../../../_metronic/partials'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import Language from 'prism-react-renderer';
import {
  TablesWidget13,
} from '../../../_metronic/partials/widgets'


const View_Profile: FC = () => (
  <>
    <div className="row">
      <div className="col-md-4 ">
      <div className='card'>
          <div className='card-body text-center py-3'>
          {/* <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'> */}
        <div className='d-flex flex-column justify-content-center align-items-center mb-3'>
          <div className='me-7 mt-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img className='rounded-circle' src={toAbsoluteUrl('/media/avatars/150-2.jpg')} alt='Metornic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>

          <div className='mt-5'>
            {/* <div className='d-flex mb-2'> */}
              {/* <div className='d-flex flex-column'> */}
                <div className='mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    Max Smith
                  </a>
                  {/* <a href='#'>
                    <KTSVG
                      path='/media/icons/duotune/general/gen026.svg'
                      className='svg-icon-1 svg-icon-primary'
                    />
                  </a> */}
                </div>

                <div className='d-flex flex-column fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='#'
                    className='text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com006.svg'
                      className='svg-icon-4 me-1'
                    />
                    Maxith
                  </a>
                  {/* <a
                    href='#'
                    className='text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/general/gen018.svg'
                      className='svg-icon-4 me-1'
                    />
                    SF, Bay Area
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 text-hover-primary mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com011.svg'
                      className='svg-icon-4 me-1'
                    />
                    max@kt.com
                  </a> */}
                </div>
              {/* </div> */}

              {/* <div className='d-flex my-4'>
                <a href='#' className='btn btn-sm btn-light me-2' id='kt_user_follow_button'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr012.svg'
                    className='svg-icon-3 d-none'
                  />

                  <span className='indicator-label'>Follow</span>
                  <span className='indicator-progress'>
                    Please wait...
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                </a>
                <a
                  href='#'
                  className='btn btn-sm btn-primary me-3'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_offer_a_deal'
                >
                  Hire Me
                </a>
                <div className='me-0'>
                  <button
                    className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                  >
                    <i className='bi bi-three-dots fs-3'></i>
                  </button>
                  <Dropdown1 />
                </div>
              </div> */}
            {/* </div> */}

            {/* <div className='d-flex'> */}
              {/* <div className=''> */}
                <div className='d-flex justify-content-between'>
                  <div className='border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr066.svg'
                        className='svg-icon-3 svg-icon-success me-2'
                      />
                      <div className='fs-4'>4500$</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Earnings</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr065.svg'
                        className='svg-icon-3 svg-icon-danger me-2'
                      />
                      <div className='fs-4'>75</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Tasks</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr066.svg'
                        className='svg-icon-3 svg-icon-success me-2'
                      />
                      <div className='fs-4'>500</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Hours</div>
                  </div>
                </div>
              {/* </div> */}

              {/* <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <span className='fw-bold fs-6 text-gray-400'>Profile Compleation</span>
                  <span className='fw-bolder fs-6'>50%</span>
                </div>
                <div className='h-5px mx-3 w-100 bg-light mb-3'>
                  <div
                    className='bg-success rounded h-5px'
                    role='progressbar'
                    style={{width: '50%'}}
                  ></div>
                </div>
              </div> */}
            {/* </div> */}
          </div>
          
            </div>
            <hr />

            <div className="mt-5" style={{textAlign: "left"}}>
                <div className="my-3">
                  <h4>Account ID</h4>
                  <span className='text-gray-800 text-hover-primary'>ID-1234678</span>
                </div>
                <div className="my-3">
                    <h4>Billing Email</h4>
                  <span className='text-gray-800 text-hover-primary'>maxsmith@max.com</span>
                </div>
                <div className="my-3">
                    <h4>Billing Address</h4>
                  <span className='text-gray-800 text-hover-primary'>15, Max street, Smith Avenue,MaxSmith</span>
                </div>
                <div className="my-3">
                    <h4>Language</h4>
                  <span className='text-gray-800 text-hover-primary'>English</span>
                </div>
              </div>

        {/* <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/overview' && 'active')
                }
                to='/crafted/pages/profile/overview'
              >
                Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/projects' && 'active')
                }
                to='/crafted/pages/profile/projects'
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/campaigns' && 'active')
                }
                to='/crafted/pages/profile/campaigns'
              >
                Campaigns
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/documents' && 'active')
                }
                to='/crafted/pages/profile/documents'
              >
                Documents
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/connections' && 'active')
                }
                to='/crafted/pages/profile/connections'
              >
                Connections
              </Link>
            </li>
          </ul>
        </div> */}
      {/* </div>
    </div> */}
      </div>
       
    
    </div>
      </div>
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div>
            <TablesWidget13 className='card-xxl-stretch mb-5 mb-xl-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </>
)

const ViewProfilePage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Profile Management' })}</PageTitle>
      <View_Profile />
    </>
  )
}

export { ViewProfilePage }
