import React, { FC, useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useLocation, Link } from 'react-router-dom'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {
  Box,
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Input,
  Divider,
  RadioGroup,
  FormLabel,
  Radio
} from "@material-ui/core";
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { NavLink } from 'react-bootstrap-v5'
import { makeStyles } from '@material-ui/core/styles';
import addresses from '../components/address'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'absolute',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
  },
  button: {
    backgroundColor: '#7367F0',
    borderRadius: '0.3rem',
    padding: '5px',
    border: `0.1rem solid`,
    color: '#fff',
    height: '1.5rem',
    display: 'flex',
    alignItems: 'center'
  }
}));

const Cart: FC = () => {
  const [activeStep, setActiveStep] = useState(0)

  const [selected, setSelected] = useState({
    checked: false,
  })
  const [acceptPolicy, setAcceptPolicy] = useState({
    checked: false,
  })
  const [total, setTotal] = useState(0)

  const handleChange3 = (event) => {
    setSelected({ [event.target.name]: event.target.checked })
  }

  const handleChange2 = (event) => {
    setAcceptPolicy({ [event.target.name]: event.target.checked })
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleChangeAddress = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 2);
  };

  const handlePaymentChange = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  let location = useLocation();
  const [item, setItem] = useState(location.state !== undefined ? (location.state.itemDetail !== undefined ? location.state.itemDetail : '') : '')

  const [cartItems, setCartItems] = useState(location.state !== undefined ? (location.state.cartItems !== undefined ? location.state.cartItems : '') : '')

  useEffect(() => {
    if (cartItems) {
      setTotal((cartItems.map(item => item.actualPrice).reduce((prev, curr) => prev + curr, 0)).toFixed(2))
    } else if(item) {
      setTotal((item.actualPrice).toFixed(2))
    } else {
      setTotal(0)
    }
  }, [total])

  const totalAmount = () => {
    if (cartItems) {
      setTotal((cartItems.map(item => item.actualPrice).reduce((prev, curr) => prev + curr, 0)).toFixed(2))
    } else if(item) {
      setTotal((item.actualPrice).toFixed(2))
    } else {
      setTotal(0)
    }
}
  const [qty, setQty] = useState(1);
  const [value, setValue] = useState('card');
  const [addresss, setAddress] = useState(addresses);
  const [add, setAdd] = useState(addresses[0]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const incQty = () => {
    if (qty < 10) {
      setQty(Number(qty) + 1);
    }
  };
  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  const onAdd = (data) => {
    const exist = cartItems.find(x => x.id === data.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === data.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...data, qty: 1 }])
    }
  }


  const handleQtyChange = (e) => {
    setQty(e.target.value)
  }


  const classes = useStyles();

  const Step1 = () => {
    return (
      <>
        <div className="container">
          {item && (
            <div className='row'>
              <div className='col-md-9'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className="col-md-12 my-3">
                        <Paper elevation={3} className='p-3'>
                          <div className='row'>
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                              <img className='img-fluid' style={{ borderRadius: '50%', width: '200px', maxHeight: "200px" }} src={item.image} alt={item.itemName} />
                            </div>
                            <div className="col-md-7 d-flex justify-content-center align-items-center">
                              <div>
                                <h4>{item.itemName}</h4>
                                <h5>{item.category}</h5>
                                <div className="mb-3 mt-4 d-flex justify-content-between">
                                  <div className='mx-3'>
                                    <input type="number" value={qty} className="form-control text-center" onChange={handleQtyChange} />
                                  </div>
                                  <div className=' d-flex flex-column text-center align-self-center'>
                                    <button className={classes.button} onClick={incQty}><AddIcon /></button>
                                    <button className={classes.button} onClick={decQty}><RemoveIcon /></button>
                                  </div>
                                </div>

                                {/* <p className='pt-5'>Delivery by {item.itemPeriod}</p> */}
                              </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center align-items-center border-2 border-start"><h3 className='mt-3' style={{ color: '#7367F0', fontSize: '2em' }}>${qty * (item.actualPrice).toFixed(2)}</h3></div>
                          </div>
                          <hr />
                          <div className="row ">
                            <div className="col-12 d-flex justify-content-end">
                              Subtotal: <h3 style={{ color: '#7367F0' }}>${qty * (item.actualPrice).toFixed(2)}</h3>
                            </div>
                          </div>
                        </Paper>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='text-center'>
                      <span><ShoppingCartIcon /></span>
                      <h2 style={{ letterSpacing: "10px" }}>SHOPPING CART</h2>
                    </div>
                    <>
                      {/* <div>
                        <span className='text-secondary'>Options</span>
                        <div className="d-flex justify-content-between">
                          <span>Coupons</span>
                          <span onClick={() => console.log('Apply Coupon')} style={{ color: '#7367F0' }}>Apply</span>
                        </div>
                      </div> */}
                      <hr />
                      <div>
                        <h4>Price Details</h4>
                        <div className="d-flex justify-content-between">
                          <span>Usual Price</span>
                          <span>${qty * (item.actualPrice).toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Discounted Price</span>
                          <span className='text-success'>-25$</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Setup Fee</span>
                          <span>$1.3</span>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <h3>Total</h3>
                        <p>${qty * (item.actualPrice).toFixed(2)}</p>
                      </div>
                    </>

                  </div>
                </div>
                <div className='card'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-center mt-3'>
                      <Button variant="contained" style={{ backgroundColor: '#7367F0' }} className='mx-3 text-white' onClick={handleNext} >
                        Place Order
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {cartItems && (
            <div className='row'>

              <div className='col-md-9'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className="col-md-12 my-2">
                        {cartItems.map((cart) => (
                          <Paper elevation={3} className='p-3 mt-5'>
                            <div className='row'>

                              <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <img className='img-fluid' style={{ borderRadius: '50%', width: '200px', maxHeight: "200px" }} src={cart.image} alt={cart.itemName} />
                              </div>
                              <div className="col-md-7 d-flex justify-content-center align-items-center">
                                <div>
                                  <h4>{cart.itemName}</h4>
                                  <h5>{cart.category}</h5>
                                  <div className="mb-3 mt-4 d-flex justify-content-between">
                                    <div className='mx-3'>
                                      <input type="number" value={qty} className="form-control text-center" onChange={handleQtyChange} />
                                    </div>
                                    <div className=' d-flex flex-column text-center align-self-center'>
                                      <button className={classes.button} onClick={incQty}><AddIcon /></button>
                                      <button className={classes.button} onClick={decQty}><RemoveIcon /></button>
                                    </div>
                                  </div>

                                  {/* <p className='pt-5'>Delivery by {item.itemPeriod}</p> */}
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-center align-items-center border-2 border-start"><h3 className='mt-3' style={{ color: '#7367F0', fontSize: '2em' }}>${qty * (cart.actualPrice).toFixed(2)}</h3></div>
                              <hr className='mt-2' />
                              <div className="col-12 d-flex justify-content-end">
                                Subtotal: <h3 className='mx-3' style={{ color: '#7367F0' }}>${qty * (cart.actualPrice).toFixed(2)}</h3>
                              </div>
                            </div>
                          </Paper>
                        ))}

                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='text-center'>
                      <span><ShoppingCartIcon /></span>
                      <h2 style={{ letterSpacing: "10px" }}>SHOPPING CART</h2>
                    </div>
                    <>
                      {/* <div>
                        <span className='text-secondary'>Options</span>
                        <div className="d-flex justify-content-between">
                          <span>Coupons</span>
                          <span onClick={() => console.log('Apply Coupon')} style={{ color: '#7367F0' }}>Apply</span>
                        </div>
                      </div> */}
                      <hr />
                      <div>
                        <h4>Price Details</h4>
                        <div className="d-flex justify-content-between">
                          <span>Usual Price</span>
                          <span>${qty * total}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Discounted Price</span>
                          <span className='text-success'>-25$</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Setup Fee</span>
                          <span>$1.3</span>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <h3>Total</h3>
                        <p>${qty * total}</p>
                      </div>
                      <div className='d-flex justify-content-center mt-3'>
                        <Button variant="contained" style={{ backgroundColor: '#7367F0' }} className='mx-3 text-white' onClick={handleNext} >
                          Place Order
                        </Button>
                      </div>
                    </>

                  </div>
                </div>
              </div>
            </div>
          )}


          {(!cartItems && !item) && (
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <Paper elevation={3} className='p-3'>
                      <h3>No item in the cart</h3>
                    </Paper>
                  </div>
                </div>
              </div>
            </div>

          )}

        </div>
      </>
    )
  }

  const Step2 = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {(addresss.length === 0 || selected.checked) &&
                <div className="card">
                  <div className="card-body">
                    <h4>Add Details</h4>
                    <p className='py-3 text-secondary'>Be sure to fill in your information</p>
                    <form onSubmit={handleNext} className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="full_name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="full_name" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile Number</label>
                        <input type="tel" className="form-control" id="mobile" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="form-label">Flat, House No</label>
                        <input type="text" className="form-control" id="address" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="landmark" className="form-label">Landmark</label>
                        <input type="text" className="form-control" id="landmark" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="town" className="form-label">Town/City</label>
                        <input type="text" className="form-control" id="town" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="pincode" className="form-label">Pincode</label>
                        <input type="text" className="form-control" id="pincode" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="state" className="form-label">State</label>
                        <input type="text" className="form-control" id="state" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="address_type" className="form-label">Address Type</label>
                        <input type="text" className="form-control" id="address_type" required />
                      </div>
                      {/* <div className="col-auto">
                        <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                          Back
                        </Button>
                      </div> */}
                      <div className='col-auto'>
                        <Button type='submit' className='text-white mb-3' style={{ backgroundColor: '#7367F0' }}>Save</Button>
                      </div>

                    </form>
                  </div>
                </div>
              }
              {addresss.length > 0 &&
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-row">
                    
                      <div>
                        <FormControl variant="outlined" className="w-100 mb-2">
                          <InputLabel>
                            Address
                          </InputLabel>
                          <Select
                            value={add}
                            defaultValue={addresss[0]}
                            onChange={(event) => {
                              setAdd(event.target.value)
                            }}
                          >
                            {addresss.map((ad, i) => (
                              <MenuItem id={i} key={i} value={addresss[i]}>
                                {addresss[i]}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                      <div className='mx-4'> <FormControlLabel
                        label="New Address"
                        labelPlacement="start"
                        control={
                          <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            checked={selected.checked}
                            onChange={handleChange3}
                            name="checked"
                            style={{ color: "#7367F0" }}

                          />
                        }
                        required
                      />
                      </div>
                      
                    </div>
                    <div>
                        <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                          Back
                        </Button>
                      </div>

                  </div>
                </div>
              }
           

            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5>John Doe</h5>
                  {/* {addresss.map((a) => ( */}
                  <address className='mt-4'>
                    {add}
                  </address>
                  {/* ))} */}

                  <p className='mt-3'>UTC-5: Eastern Standard Time (EST)</p>
                  <p className='mt-4'>202-555-0140</p>
                  <Button type='button' onClick={handleNext} className='text-white mb-3 w-100' style={{ backgroundColor: '#7367F0' }}>Deliver Here</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const Step3 = () => {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div> <FormControlLabel
              label="I ACCEPT POLICY AND CONTRACT TERMS"
              labelPlacement="end"
              control={
                <Checkbox
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                  checked={acceptPolicy.checked}
                  onChange={handleChange2}
                  name="checked"
                  style={{ color: "#7367F0" }}

                />
              }
              required
            />
            </div>
            <div> <FormControlLabel
              label="I ACCEPT DISCLAIMER AND COMPLIANCE"
              labelPlacement="end"
              control={
                <Checkbox
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                  checked={acceptPolicy.checked}
                  onChange={handleChange2}
                  name="checked"
                  style={{ color: "#7367F0" }}
                />
              }
              required
            />
            </div><div> <FormControlLabel
              label="We reserve the right to changes to the Compensation Plan or Affiliate's Terms of Use"
              labelPlacement="end"
              control={
                <Checkbox
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                  checked={acceptPolicy.checked}
                  onChange={handleChange2}
                  name="checked"
                  style={{ color: "#7367F0" }}
                />
              }
              required
            />
            </div>
            <div> <FormControlLabel
              label="I CONFORM THE DECLARATION OF AGREEMENT"
              labelPlacement="end"
              control={
                <Checkbox
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                  checked={acceptPolicy.checked}
                  onChange={handleChange2}
                  name="checked"
                  style={{ color: "#7367F0" }}
                />
              }
              required
            />
            </div>
          </div>
        </div>
        {acceptPolicy.checked && (
          <div className="row p-4">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <FormControl component="fieldset">
                    <RadioGroup value={value}>
                      <FormControlLabel value='card' control={<Radio
                        onChange={handleChange}
                        name="card"
                        style={{ color: "#7367F0" }} />} label="US Unlocked Debit Card 12XX XXXX XXXX 0000" />
                      <div>
                        <span>Enter CVV: </span>
                        <input type="text" />
                        <Button variant="contained" style={{ backgroundColor: '#7367F0' }} className='mx-3 text-white'>
                          Continue
                        </Button>
                      </div>
                      <hr />
                      <FormControlLabel value='bank' control={<Radio
                        onChange={handleChange}
                        name="bank"
                        style={{ color: "#7367F0" }} />} label="Bank" />
                      <FormControlLabel value='crypto' control={<Radio
                        onChange={handleChange}
                        name="bank"
                        style={{ color: "#7367F0" }} />} label="Cyptocurrencies" />
                    </RadioGroup>


                  </FormControl>
                  {value === 'card' && (
                    <div className='text-center'>
                      <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                        Back
                      </Button>
                    </div>
                  )}


                  {value === 'bank' && (
                    <div className="card">
                      <div className="card-body">

                        <h3>Banking Details</h3>
                        <p className='text-danger'>Add the ordered package as well as your selected username in the transaction notes.</p>
                        <p className='py-3'>Please upload the payment confirmation after the successful transaction to get activated without any unnecessary delays.</p>
                        <p className='text-danger py-5'>
                          We can only accept SEPA transactions in Euro €.
                        </p>
                        <span className='d-block'>Receiver: BE INFINITY
                          LIMITED</span>
                        <span>IBAN: LT863500010010696324</span>
                        {/* <Paper className="dropzone" elevation={2}>
                              <div className="dropzone-card">
                                <div className="dropzone">
                                  <Dropzone
                                    style={{
                                      cursor: "pointer",
                                      border: "2px dashed grey",
                                    }}
                                    minSize={0}
                                    maxSize={1000000}
                                    accept=".jpeg, .png, .jpg"
                                    onDrop={(accepted, rejected) => {
                                      setAccepted(accepted);
                                      setRejected(rejected);
        
                                    }}
                                  >
                                      <div className="justify-content-between">
                                      <NoteAddIcon variant="contained" color="primary" />
                                      </div>
                                      <p className="mt-4">Only *.jpeg, *.png and *.jpg images will be accepted</p>
                                  </Dropzone>
                                </div>
                                <div className="dropzone-content">
                                  {accepted.length > 0 && (
                                    <>
                                      <h2 className="text-success">File to Upload</h2>
                                      <ul className="upload-file-list">
                                        {accepted.map((f) => (
                                          <li key={f.name}>
                                            {f.name} - {f.size} bytes
                                          </li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
        
                                  {rejected.length > 0 && (
                                    <>
                                      <h4 className="text-danger">Rejected file</h4>
                                      <ul className="upload-file-list">
                                        {rejected.map((f) => (
                                          <li key={f.name}>
                                            {f.name} - {f.size} bytes
                                          </li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                              </div>
                            </Paper> */}
                        <label className='d-flex' htmlFor="file">Remove Selected Receipt</label>
                        <input type='file' name='file' id='file' required className='d-flex border' />

                        <Button className='d-flex mt-5 text-white' style={{ backgroundColor: "#7367F0" }}>Upload</Button>

                        <div className='d-flex justify-content-center mt-5'>
                          <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                            Back
                          </Button>
                          <Button variant="contained" style={{ backgroundColor: "#7367F0" }} className='mx-3 text-white' onClick={handleNext} >
                            Finish
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  {value === 'crypto' && (
                    <div className="card">
                      <div className="card-body">
                        <div className='text-center p-5' style={{ background: "#DAEEF7", borderRadius: "8px" }}>Click finish button to continue</div>
                        <h3 className='text-danger py-4'>Important:</h3>
                        <p>Please make sure that the price shown by the payment site is the amount that the destination wallet receives.</p>
                        <p>Some Exchanges/Wallets will deduct the network-fees from the amount you withdraw.</p>
                        <p className="text-danger py-4">Meaning, you have to manually respect the network fees to send the correct amount.</p>
                        <p className="py-5">If you miss this detail, the destination wallet will not receive the full payment.</p>
                        <p>When the system detects this underpayment, your order will not be marked as completed. Manual administration will be required in those cases.
                        </p>
                        <p>If the transaction is not showing as successful for you after 1hour, please contact the Support at: support@beinfinity.com</p>

                        <table className='table table-bordered'>
                          <thead className='thead-dark'>
                            <tr>
                              <th>Coin</th>
                              <th>Network</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Bitcoin (BTC )</td>
                              <td>Bitcoin Network</td>
                            </tr>
                            <tr>
                              <td>BitcoinCash (BTC )</td>
                              <td>Bitcoin Network</td>
                            </tr>
                            <tr>
                              <td>Dai (Dai )</td>
                              <td>Ethereum Network (ERC 20 )</td>
                            </tr>
                            <tr>
                              <td>Ethereum (ETH )</td>
                              <td>Ethereum Network (ERC 20 )</td>
                            </tr>
                            <tr>
                              <td>Litecoin (LTC )</td>
                              <td>Litecoin Network</td>
                            </tr>
                            <tr>
                              <td>USDcoin (USDC )</td>
                              <td>Ethereum Network (ERC 20 )</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className='d-flex justify-content-center mt-5'>
                          <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                            Back
                          </Button>
                          <Button variant="contained" style={{ backgroundColor: "#7367F0" }} className='mx-3 text-white' onClick={() => console.log('completed')} >
                            Finish
                          </Button>
                        </div>
                      </div>


                    </div>
                  )}
                </div>
              </div>



            </div>


            <div className="col-md-4">
              <div className='card'>
                <div className='card-body'>
                  <div className='text-center'>
                    <span><ShoppingCartIcon /></span>
                    <h2 style={{ letterSpacing: "10px" }}>SHOPPING CART</h2>
                  </div>
                  <>
                    {/* <div>
                        <span className='text-secondary'>Options</span>
                        <div className="d-flex justify-content-between">
                          <span>Coupons</span>
                          <span onClick={() => console.log('Apply Coupon')} style={{ color: '#7367F0' }}>Apply</span>
                        </div>
                      </div> */}
                    <hr />
                    <div>
                      <h4>Price Details</h4>
                      <div className="d-flex justify-content-between">
                        <span>Usual Price</span>
                        <span>${qty * total}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Discounted Price</span>
                        <span className='text-success'>-25$</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Setup Fee</span>
                        <span>$1.3</span>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <h3>Total</h3>
                      <p>${qty * total}</p>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                      <Button variant="contained" style={{ backgroundColor: '#7367F0' }} className='mx-3 text-white' onClick={handleNext} >
                        Place Order
                      </Button>
                    </div>
                  </>

                </div>
              </div>
            </div>
          </div>
        )}


      </>
    )
  }

  const Step4 = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
            <div className="card">
          <div className="card-body">
                  <div className="row">
                    
                      <div className="col-md-6">
                      <Paper elevation={3} className='p-3 mt-5'>
                    <h5>John Doe</h5>
                  <address className='mt-4'>
                    {add}
                  </address>
                  <p className='mt-3'>UTC-5: Eastern Standard Time (EST)</p>
                  <p className='mt-4'>Phone: 202-555-0140</p>
                        <Button type='button' onClick={handleChangeAddress} className='text-white mb-3' style={{ backgroundColor: '#7367F0' }}>Change</Button>
                        </Paper>
                </div>
                    <div className="col-md-6 ">
                    <Paper elevation={3} className='p-3 mt-5'>
                      <h5>Payment Method</h5>
                      <p className='text-capitalize'>{value}</p>
                        <Button type='button' onClick={handlePaymentChange} className='text-white mb-3' style={{ backgroundColor: '#7367F0' }}>Change</Button>
                        </Paper>
                    </div>
                   
                  
                    <div className="col-md-12">
                      
                    { cartItems && cartItems.map((cart) => (
                          <Paper elevation={3} className='p-3 mt-5'>
                            <div className='row'>

                              <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <img className='img-fluid' style={{ borderRadius: '50%', width: '200px', maxHeight: "200px" }} src={cart.image} alt={cart.itemName} />
                              </div>
                              <div className="col-md-7 d-flex justify-content-center align-items-center">
                                <div>
                                  <h4>{cart.itemName}</h4>
                                  <h5>{cart.category}</h5>
                                  <div className="mb-3 mt-4 d-flex justify-content-between">
                                    <div className='mx-3'>
                                      <input type="number" value={qty} className="form-control text-center" onChange={handleQtyChange} />
                                    </div>
                                    <div className=' d-flex flex-column text-center align-self-center'>
                                      <button className={classes.button} onClick={incQty}><AddIcon /></button>
                                      <button className={classes.button} onClick={decQty}><RemoveIcon /></button>
                                    </div>
                                  </div>

                                  {/* <p className='pt-5'>Delivery by {item.itemPeriod}</p> */}
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-center align-items-center border-2 border-start"><h3 className='mt-3' style={{ color: '#7367F0', fontSize: '2em' }}>${qty * (cart.actualPrice).toFixed(2)}</h3></div>
                              <hr className='mt-2' />
                              <div className="col-12 d-flex justify-content-end">
                                Subtotal: <h3 className='mx-3' style={{ color: '#7367F0' }}>${qty * (cart.actualPrice).toFixed(2)}</h3>
                              </div>
                            </div>
                          </Paper>
                    ))}
                      
                      {item && (
                        <Paper elevation={3} className='p-3'>
                        <div className='row'>
                          <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <img className='img-fluid' style={{ borderRadius: '50%', width: '200px', maxHeight: "200px" }} src={item.image} alt={item.itemName} />
                          </div>
                          <div className="col-md-7 d-flex justify-content-center align-items-center">
                            <div>
                              <h4>{item.itemName}</h4>
                              <h5>{item.category}</h5>
                              <div className="mb-3 mt-4 d-flex justify-content-between">
                                <div className='mx-3'>
                                  <input type="number" value={qty} className="form-control text-center" onChange={handleQtyChange} />
                                </div>
                                <div className=' d-flex flex-column text-center align-self-center'>
                                  <button className={classes.button} onClick={incQty}><AddIcon /></button>
                                  <button className={classes.button} onClick={decQty}><RemoveIcon /></button>
                                </div>
                              </div>

                              {/* <p className='pt-5'>Delivery by {item.itemPeriod}</p> */}
                            </div>
                          </div>
                          <div className="col-md-2 d-flex justify-content-center align-items-center border-2 border-start"><h3 className='mt-3' style={{ color: '#7367F0', fontSize: '2em' }}>${qty * (item.actualPrice).toFixed(2)}</h3></div>
                        </div>
                        <hr />
                        <div className="row ">
                          <div className="col-12 d-flex justify-content-end">
                            Subtotal: <h3 style={{ color: '#7367F0' }}>${qty * (item.actualPrice).toFixed(2)}</h3>
                          </div>
                        </div>
                      </Paper>
                      )}

                    </div>
              </div>
             </div>
          </div>
            </div>
            <div className="col-md-3">
            <div className='card'>
                  <div className='card-body'>
                    <div className='text-center'>
                      <span><ShoppingCartIcon /></span>
                      <h2 style={{ letterSpacing: "10px" }}>SHOPPING CART</h2>
                    </div>
                    <>
                      {/* <div>
                        <span className='text-secondary'>Options</span>
                        <div className="d-flex justify-content-between">
                          <span>Coupons</span>
                          <span onClick={() => console.log('Apply Coupon')} style={{ color: '#7367F0' }}>Apply</span>
                        </div>
                      </div> */}
                      <hr />
                      <div>
                        <h4>Price Details</h4>
                        <div className="d-flex justify-content-between">
                          <span>Usual Price</span>
                          <span>${qty * total}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Discounted Price</span>
                          <span className='text-success'>-25$</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Setup Fee</span>
                          <span>$1.3</span>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <h3>Total</h3>
                        <p>${qty * total}</p>
                      </div>
                    <div className='d-flex justify-content-center mt-3'>
                    {/* <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                            Back
                          </Button> */}
                        <Button variant="contained" style={{ backgroundColor: '#7367F0' }} className='mx-3 text-white' onClick={handleNext} >
                          Place Order
                        </Button>
                      </div>
                    </>

                  </div>
                </div>
            </div>
          </div>
        </div>
        
      </>
    )
  }







  return (
    <>
      <Box className='mt-3'>
        {activeStep === 0 ? <Step1 /> : activeStep === 1 ? <Step2 /> : activeStep === 2 ? <Step3 /> : activeStep === 3 ? <Step4 /> : ''}
      </Box>
    </>
  )
}


export { Cart }
