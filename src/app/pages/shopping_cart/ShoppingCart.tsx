

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import { PageTitle, PageLink } from '../../../_metronic/layout/core'
import { Shop } from './components/Shop'
import { Cart } from './components/Cart'
import {Details} from './components/Details'


const shoppingCartBreadCrumbs: Array<PageLink> = [
  {
    title: 'Shopping Cart',
    path: '/shopping_cart/shop',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ShoppingCartPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/shopping_cart/shop'>
        <PageTitle breadcrumbs={shoppingCartBreadCrumbs}>Shop</PageTitle>
        <Shop />
      </Route>
      
      <Route path='/shopping_cart/details'>
        <PageTitle breadcrumbs={shoppingCartBreadCrumbs}>Details</PageTitle>
        <Details />
      </Route>

      <Route path='/shopping_cart/cart'>
        <PageTitle breadcrumbs={shoppingCartBreadCrumbs}>Cart</PageTitle>
        <Cart />
      </Route>

      <Redirect from='/shopping_cart' exact={true} to='/shopping_cart/shop' />
      <Redirect to='/shopping_cart/shop' />
    </Switch>
  )
}
export default ShoppingCartPage 
