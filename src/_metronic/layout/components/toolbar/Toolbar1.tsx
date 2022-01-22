/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, { FC } from 'react'
import { KTSVG } from '../../../helpers'
import { useLayout } from '../../core'
import { DefaultTitle } from '../header/page-title/DefaultTitle'
import { usePageData } from '../../core/PageData'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#7367F0',
    color: '#fff'
  },
}))(Badge);

const Toolbar1: FC = () => {
  const { classes } = useLayout()
  const { pageTitle } = usePageData()

  return (
    <div className='toolbar' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
      >
        <DefaultTitle />

        {/* begin::Actions */}
        <div className='d-flex align-items-center py-1'>
          {/* begin::Wrapper */}
          <div className='me-4'>
            {/* begin::Menu */}
            {/* <a
              href='#'
              className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTSVG
                path='/media/icons/duotune/general/gen031.svg'
                className='svg-icon-5 svg-icon-gray-500 me-1'
              />
              Filter
            </a> */}

            {/* end::Menu */}
          </div>
          {/* end::Wrapper */}

          {/* begin::Button */}
          {(pageTitle === 'Shop' || pageTitle === 'Details' || pageTitle ==='Cart') &&
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          }

          {/* end::Button */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export { Toolbar1 }
