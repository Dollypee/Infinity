import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
} from "@material-ui/core";
import { NavLink } from 'react-bootstrap-v5'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
  },
}));

const Cart: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const [selected, setSelected] = React.useState({
    checked: false,
  })
  const [acceptPolicy, setAcceptPolicy] = React.useState({
    checked: false,
  })

  const handleChange = (event) => {
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


  const classes = useStyles();

  const Step1 = () => {
    return (
      <>
         
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <Box className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" className={classes.content}>
        <Box className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet
          id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est
          ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At
          augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida
          rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus
          et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.
          Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
      </>
    )
  }

  const Step2 = () => {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <p className='text-center py-3'>Total Amount: € 1071.28</p>
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

      
      <Box className='mt-3'>
        {activeStep === 0 ? <Step1 /> : activeStep === 1 ? <Step2 /> : ''}
      </Box>
    </>
  )
}


export { Cart }
