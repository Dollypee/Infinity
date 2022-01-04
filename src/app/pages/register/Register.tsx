/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  Box,
  Step,
  Stepper,
  StepLabel,
  Paper,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Slide,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NoteAddIcon from "@material-ui/icons/NoteAdd"
import { NavLink } from 'react-bootstrap-v5'
import Dropzone from 'react-dropzone';

const Register: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [steps, setSteps] = React.useState([])
  const [selected, setSelected] = React.useState({
    checked: false,
  })
  const [acceptPolicy, setAcceptPolicy] = React.useState({
    checked: false,
  })
  const [accepted, setAccepted] = React.useState([]);
  const [rejected, setRejected] = React.useState([]);

  const handleChange = (event) => {
    setSelected({ [event.target.name]: event.target.checked })
  }
  const handleChange2 = (event) => {
    setAcceptPolicy({ [event.target.name]: event.target.checked })
  }



  useEffect(() => {
    const allSteps = () => {
      return [
        "",
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


  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const Step1 = () => {
    return (
      <>
        <div className='card'>
          <div className='card-body'>

            <h2 className='text-center'>SPONSOR AND PACKAGE</h2>
            <form noValidate autoComplete="off">
              <TextField label="Sponsor Username" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth required value='Chriz369' InputProps={{
                readOnly: true,
              }} />
              <TextField label="Sponsor Full name" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth value='Chriz Nickel' InputProps={{
                readOnly: true,
              }} />

            </form>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" className='mx-3' onClick={handleNext} >
            Next
          </Button>
        </div>
      </>

    )
  }

  const Step2 = () => {
    return (
      <>
        <div className='row'>
          <div className='col-md-9'>
            <div className='card'>
              <div className='card-body'>
                <h2 className='text-center'>CHOOSE YOUR INFINITY BASIC PACKAGE</h2>
                <h3 className='py-3'>Infinity Basic Main:</h3>
                <div className='row justify-content-center'>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
0deg, rgba(34,193,195,1) 0%, rgb(253,187,45,1) 100%)`}}>6</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
0deg, rgba(34,193,195,1) 0%, rgb(253,187,45,1) 100%)`}}>6</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
0deg, rgba(34,193,195,1) 0%, rgb(253,187,45,1) 100%)`}}>6</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
0deg, rgba(34,193,195,1) 0%, rgb(253,187,45,1) 100%)`}}>6</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
0deg, rgba(34,193,195,1) 0%, rgb(253,187,45,1) 100%)`}}>6</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
0deg, rgba(34,193,195,1) 0%, rgb(253,187,45,1) 100%)`}}>6</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                </div>
                <h3 className='py-4'>Infinity Basic Add-Ons:</h3>
                <div className='row'>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
0deg, rgba(34,193,195,1) 0%, rgb(253,187,45,1) 100%)`}}>6</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                </div>
                <hr />
                <hr />
                <h2 className="text-center py-3">AFFILIATE-OLD</h2>
                <div className='row'>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
                                0deg, #23b7e5 0%, rgb(197 108 19) 100%)`}}>3</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                </div>
                <hr />
                <h2 className="text-center">CHOOSE YOUR AFFILIATE PACKAGE</h2>
                <h3 className='py-3'>Affiliate Main:</h3>
                <div className='row'>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
                                0deg, #23b7e5 0%, rgb(197 108 19) 100%)`}}>3</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
                                0deg, #23b7e5 0%, rgb(197 108 19) 100%)`}}>3</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
                                0deg, #23b7e5 0%, rgb(197 108 19) 100%)`}}>3</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
                                0deg, #23b7e5 0%, rgb(197 108 19) 100%)`}}>3</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
                      </div>
                    </Paper>
                  </div>
                  <div className="col-md-6 my-3">
                    <Paper elevation={2} className='p-3'>
                      <span className='d-flex justify-content-end pb-3'><HelpOutlineIcon /></span>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <span> <FormControlLabel
                            label=""
                            // labelPlacement="start"
                            control={
                              <Checkbox
                                checked={selected.checked}
                                onChange={handleChange}
                                name="checked"
                                color="primary"
                              />
                            }
                          /></span>
                          <span className='d-inline-flex justify-content-center align-items-center align-self-center' style={{
                            minWidth: '5rem', minHeight: "4rem", border: '5px solid', borderImageSlice: 1, borderImageSource: `linear-gradient(
                                0deg, #23b7e5 0%, rgb(197 108 19) 100%)`}}>3</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'><h4>€ 689.31</h4> <h5>Basic Gold</h5></div>
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

                  {selected.checked ? (
                    <>
                      <div>
                        <h4>Package (Months)</h4>
                        <div className="d-flex justify-content-between">
                          <p>Enrollment Fee</p>
                          <p>€ 689.31</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <h4>Package (Months)</h4>
                        <div className="d-flex justify-content-between">
                          <p>Enrollment Fee</p>
                          <p>€ 689.31</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <div className="d-flex justify-content-between">
                          <p>OneTime Fee</p>
                          <p>€ 689.31</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Subtotal</p>
                          <p>€ 689.31</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Discount</p>
                          <p>€ 689.31</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <h3>Your Payment</h3>
                        <p>€ 689.31</p>
                      </div>
                    </>
                  ) : (
                    <>

                      <p className='py-5'>Your cart is currently empty</p>
                    </>

                  )}
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <div className='d-flex justify-content-center mt-3'>
                  <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                    Back
                  </Button>
                  <Button disabled={!selected.checked} variant="contained" color="primary" className='mx-3' onClick={handleNext} >
                    Next
                  </Button>
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
            <h2 className="text-center">CONTACT INFORMATION</h2>
            <form noValidate autoComplete="off">
              <TextField label="First Name" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth required />
              <TextField label="Last Name" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth required />
              <TextField label="Date Of Birth" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='date' fullWidth required />
              <TextField label="Address Line 1" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth />
              <TextField label="Address Line 2" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth />
              <FormControl variant="outlined" fullWidth>
                <Select
                  native
                  // value={}
                  // onChange={handleChange}
                  label="Country">
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl variant="outlined" fullWidth>
                <Select
                  native
                  // value={}
                  // onChange={handleChange}
                  label="State">
                  <option aria-label="None" value="Select State" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <TextField label="City" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth />
              <TextField label="E-mail" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='email' fullWidth required />
              <TextField label="Mobile No" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='phone' fullWidth required />

            </form>
            <div className='d-flex justify-content-center mt-3'>
              <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" className='mx-3' onClick={handleNext} >
                Next
              </Button>
            </div>
          </div>
        </div>
      </>
    )
  }

  const Step4 = () => {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">LOGIN INFORMATION</h2>
            <form noValidate autoComplete="off">
              <TextField label="Username" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='text' fullWidth required />
              <TextField label="Password" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='password' fullWidth required />
              <TextField label="Confirm Password" InputLabelProps={{ shrink: true }} variant="outlined" className='mt-5' type='password' fullWidth required />

              <div> <FormControlLabel
                label="I ACCEPT POLICY AND CONTRACT TERMS"
                labelPlacement="end"
                control={
                  <Checkbox
                    checked={acceptPolicy.checked}
                    onChange={handleChange2}
                    name="checked"
                    color="primary"

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
                    checked={acceptPolicy.checked}
                    onChange={handleChange2}
                    name="checked"
                    color="primary"
                  />
                }
                required
              />
              </div><div> <FormControlLabel
                label="We reserve the right to changes to the Compensation Plan or Affiliate's Terms of Use"
                labelPlacement="end"
                control={
                  <Checkbox
                    checked={acceptPolicy.checked}
                    onChange={handleChange2}
                    name="checked"
                    color="primary"
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
                    checked={acceptPolicy.checked}
                    onChange={handleChange2}
                    name="checked"
                    color="primary"
                  />
                }
                required
              />
              </div>


            </form>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <div className='d-flex justify-content-center mt-3'>
              <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                Back
              </Button>
              <Button disabled={!acceptPolicy.checked} variant="contained" color="primary" className='mx-3' onClick={handleNext} >
                Next
              </Button>
            </div>
          </div>
        </div>
      </>
    )
  }

  const Step5 = () => {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className='mt-4'>PAYMENT TYPE</h3>
            <p className='text-center py-3'>Total Amount: € 1071.28</p>
            <div className="row border p-4">
              <div className="col-md-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <NavLink className="nav-link active" id="v-pills-bank-tab" data-bs-toggle="pill" href="#v-pills-bank" role="tab" aria-controls="v-pills-bank" aria-selected="true">Bank Tansfer</NavLink>
                  <NavLink className="nav-link" id="v-pills-crypto-tab" data-bs-toggle="pill" href="#v-pills-crypto" role="tab" aria-controls="v-pills-crypto" aria-selected="false">Cryptocurrencies</NavLink>

                </div>

              </div>
              <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active text-center" id="v-pills-bank" role="tabpanel" aria-labelledby="v-pills-bank-tab">
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

                    <Button className='d-flex btn btn-sm btn-primary mt-5'>Upload</Button>

                    <div className='d-flex justify-content-center mt-5'>
                      <Button disabled={activeStep === 0} className=' btn-secondary mx-3' variant='contained' onClick={handleBack}>
                        Back
                      </Button>
                      <Button variant="contained" color="primary" className='mx-3' onClick={handleNext} >
                        Finish
                      </Button>
                    </div>

                  </div>
                  <div className="tab-pane fade text-center" id="v-pills-crypto" role="tabpanel" aria-labelledby="v-pills-crypto-tab">
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
                      <Button variant="contained" color="primary" className='mx-3' onClick={handleNext} >
                        Finish
                      </Button>
                    </div>
                  </div>
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
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>


      <Box className='mt-3'>
        {activeStep === 0 ? <Step1 /> : activeStep === 1 ? <Step2 /> : activeStep === 2 ? <Step3 /> : activeStep === 3 ? <Step4 /> : activeStep === 4 ? <Step5 /> : ''}
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
