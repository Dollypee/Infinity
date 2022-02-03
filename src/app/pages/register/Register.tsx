/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  Box,
  Step,
  Stepper,
  StepLabel,
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  RadioGroup,
  Radio,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import NoteAddIcon from "@material-ui/icons/NoteAdd"
import { NavLink } from 'react-bootstrap-v5'
import Dropzone from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import addresses from '../shopping_cart/components/address'

const Register: FC = () => {
  const { username } = useParams()


  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: '#7367F0',
      borderRadius: '0.3rem',
      padding: '5px',
      border: `0.1rem solid`,
      color: '#fff',
      height: '1.5rem',
      display: 'flex',
      alignItems: 'center'
    },
    step: {
      backgroundColor: '#7367F0',
    }
  }));

  const [activeStep, setActiveStep] = useState(0)
  const [steps, setSteps] = useState([])
  const [selected, setSelected] = useState({
    checked: false,
  })
  const [selectedd, setSelectedd] = useState({
    checked: false,
  })

  const [accepted, setAccepted] = useState([]);
  const [rejected, setRejected] = useState([]);

  const handleChange = (event) => {
    setSelected({ [event.target.name]: event.target.checked })
  }
  const handleChange2 = (event) => {
    setAcceptPolicy({ [event.target.name]: event.target.checked })
  }

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://i.ibb.co/dQt4cPq/wristwatch.jpg",
      category: "Appliances",
      actualPrice: 200,
      discountedPrice: 50,
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 2nd",
      itemStocks: 25,
      itemDescription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias fugit ullam inventore amet consequatur facilis sit esse explicabo. Et quas ducimus, dicta pariatur officia quasi nemo sapiente fugit similique quo!"
    },
    {
      id: 2,
      image: "https://i.ibb.co/wwRRHqk/phone.jpg",
      category: "Appliances",
      actualPrice: 180,
      discountedPrice: 20,
      itemName: "Apple watch series 5",
      itemPeriod: "Jan 31st",
      itemStocks: 30,
      itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti aut, tempore id quam voluptatum, sapiente quis asperiores molestiae reiciendis consectetur! Possimus quam provident praesentium qui perferendis voluptatibus fugit dolorem."
    },
    {
      id: 3,
      image: "https://i.ibb.co/PN0D5c6/airpod.jpg",
      category: "Computers & Tablets",
      actualPrice: 1900,
      discountedPrice: 700,
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 6th",
      itemStocks: 18,
      itemDescription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias fugit ullam inventore amet consequatur facilis sit esse explicabo. Et quas ducimus, dicta pariatur officia quasi nemo sapiente fugit similique quo!"
    },
    {
      id: 4,
      image: "https://i.ibb.co/dQt4cPq/wristwatch.jpg",
      category: "Computers & Tablets",
      actualPrice: 210,
      discountedPrice: 90,
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 12th",
      itemStocks: 16,
      itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti aut, tempore id quam voluptatum, sapiente quis asperiores molestiae reiciendis consectetur! Possimus quam provident praesentium qui perferendis voluptatibus fugit dolorem."
    },
    {
      id: 5,
      image: "https://i.ibb.co/wwRRHqk/phone.jpg",
      category: "Computers & Tablets",
      actualPrice: 170,
      discountedPrice: 70,
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 14th",
      itemStocks: 12,
      itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti aut, tempore id quam voluptatum, sapiente quis asperiores molestiae reiciendis consectetur! Possimus quam provident praesentium qui perferendis voluptatibus fugit dolorem."
    },
    {
      id: 6,
      image: "https://i.ibb.co/PN0D5c6/airpod.jpg",
      category: "Computers & Tablets",
      actualPrice: 100,
      discountedPrice: 50,
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 11th",
      itemStocks: 20,
      itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti aut, tempore id quam voluptatum, sapiente quis asperiores molestiae reiciendis consectetur! Possimus quam provident praesentium qui perferendis voluptatibus fugit dolorem."
    },
  ])

  const [acceptPolicy, setAcceptPolicy] = useState({
    checked: false,
  })
  const [total, setTotal] = useState(0)



  useEffect(() => {
    const allSteps = () => {
      return [
        "",
        "",
        "",
        "",
      ];
      // This serves as the label for the stepper
      // return [
      //   '1',
      //   '2',
      //   '3',
      //   '4',
      //   '5',
      // ]
    };
    setSteps(allSteps)

  }, [setSteps])
  
  useEffect(() => {
    if (cartItems) {
      setTotal((cartItems.map(item => item.actualPrice).reduce((prev, curr) => prev + curr, 0)).toFixed(2))
    }
    // else if (item) {
    //   setTotal((item.actualPrice).toFixed(2))
    // }
    else {
      setTotal(0)
    }
  }, [total])


  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const [open, setOpen] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [value, setValue] = useState('card');
  const [qty, setQty] = useState(1);
  const [addresss, setAddress] = useState(addresses);
  const [add, setAdd] = useState(addresses[0]);

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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.replace("/dashboard");
  };
  const handleConfirm = () => {
    setConfirm(true);
    setOpen(false);
  }
  const handleChange3 = (event) => {
    setSelectedd({ [event.target.name]: event.target.checked })
  }
  const handleChange4 = event => {
    setValue(event.target.value)
  }

  const handleChangeAddress = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 2);
  };

  const handlePaymentChange = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleQtyChange = (e) => {
    setQty(e.target.value)
  }

  const classes = useStyles();


  const Step1 = () => {
    return (
      <>
       
          <Box>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <h2 className='text-center'>SPONSOR</h2>


        </DialogTitle>
            <DialogContent dividers>
            <h5> Would you love to register or continue with {username} ?</h5>
          <Typography gutterBottom>
            <form noValidate autoComplete="off">
              <TextField label="Sponsor Username" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth required value={username} InputProps={{
                readOnly: true,
              }} />
              <TextField label="Sponsor Full name" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth value={username} InputProps={{
                readOnly: true,
              }} />

            </form>
          </Typography>
        </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button autoFocus onClick={handleConfirm} color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
        </Box>
        {confirm && (
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
                               <span> <FormControlLabel
                    label=""
                    // labelPlacement="start"
                    control={
                      <Checkbox
                      icon={<CircleUnchecked />}
                      checkedIcon={<CircleCheckedFilled />}
                        checked={selected.checked}
                        onChange={handleChange}
                        name="checked"
                        style={{ color: "#7367F0" }}
                        />
                    }
                  /></span>
                                 <img className='img-fluid' style={{ borderRadius: '50%', maxWidth: '100px', maxHeight: "100px" }} src={cart.image} alt={cart.itemName} />
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
                     {selected.checked &&
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
                  }{
                    !selected.checked && (
                      <>

                      <p className='py-5'>Your cart is currently empty</p>
                    </>
                    )
                  }
                   </div>
                 </div>
               </div>
             </div>

        )}
      </> 

    )
  }



  const Step2 = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {(addresss.length === 0 || selectedd.checked) &&
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
                            checked={selectedd.checked}
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
                        onChange={handleChange4}
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
                        onChange={handleChange4}
                        name="bank"
                        style={{ color: "#7367F0" }} />} label="Bank" />
                      <FormControlLabel value='crypto' control={<Radio
                        onChange={handleChange4}
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

      {/* begin::Body */}
      <Box>
        <Stepper    
          activeStep={activeStep}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step  key={label}>
              <StepLabel >{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>


      <Box className='mt-3'>
        {activeStep === 0 ? <Step1 /> : activeStep === 1 ? <Step2 /> : activeStep === 2 ? <Step3 /> : activeStep === 3 ? <Step4 /> : ''}
      </Box>
      {/* begin::Body */}


    </>
  )
}

const RegisterPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Register New Member' })}</PageTitle>
      <Register />
    </>
  )
}

export { RegisterPage }
