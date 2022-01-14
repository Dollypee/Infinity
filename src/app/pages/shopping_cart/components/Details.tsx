import React, { FC } from 'react'
import {useLocation} from 'react-router-dom'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Box,
  Button,
} from "@material-ui/core";

const Details: FC = (props) => {
  let location = useLocation();
  const [itemDetail, setItemDetail] = React.useState(location.state !== undefined ? location.state.s : '')


  return (
    <>
      <div className="container py-5">
        {itemDetail &&
          (<div className="row d-flex justify-content-center align-items-center">
         
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img className='img-fluid' style={{ borderRadius: '50%', width: '250px' }} src={itemDetail.image} alt={itemDetail.itemName} /></div>
            <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
              <div>
                <h4>{itemDetail.itemName}</h4>
                <h5>{itemDetail.category}</h5>
                <h3 style={{ color: "#7367F0" }} className='mt-3'>{itemDetail.discountedPrice}</h3>
                <p>{itemDetail.itemDescription}</p>
                <Button className='text-white mt-4 p-3' style={{ backgroundColor: '#7367F0' }} onClick={() => console.log('hello')}>
                  <ShoppingCartIcon /> <span className='px-3'> View in Cart</span>
                </Button>
              </div>
           
            </div>
         
          </div>)
        }
        {!itemDetail &&
          (<div>
            <h1>Please Select an item in shop</h1>
          </div>)
        }
      </div>
    </>
  )
}


export { Details }
