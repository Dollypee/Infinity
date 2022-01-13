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
  InputBase
} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-bootstrap-v5'
import { lighten, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth + 30}px)`,
    marginLeft: drawerWidth,
    // marginTop: 300,
    backgroundColor: '#fff',
  },
  drawer: {
    position: "relative",
    marginLeft: "auto",
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none"
    },
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      position: "absolute",
      height: (props: { height: number }) => props.height,
      transition: "none !important"
    }
  },
  // drawer: {
  //   width: drawerWidth,
  //   // flexShrink: 0,
  // },
  drawerPaper: {
    width: drawerWidth,
    position: 'absolute',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(12),
  },
  cardroot: {
    maxWidth: 345,
    margin: '0 auto',
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
  }
}));

const Shop: FC = () => {

  const [shopItems, setShopItems] = React.useState([
    {
      image: "https://source.unsplash.com/user/c_v_r",
      category: "Appliances",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 2nd",
    },
    {
      image: "https://source.unsplash.com/user/c_v_r",
      category: "Appliances",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Jan 31st",
    },
    {
      image: "https://source.unsplash.com/user/c_v_r",
      category: "Computers & Tablets",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 6th",
    },
    {
      image: "https://source.unsplash.com/user/c_v_r",
      category: "Computers & Tablets",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 12th",
    },
    {
      image: "https://source.unsplash.com/user/c_v_r",
      category: "Computers & Tablets",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 14th",
    },
    {
      image: "https://source.unsplash.com/user/c_v_r",
      category: "Computers & Tablets",
      actualPrice: "$100",
      discountedPrice: "$50",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 11th",
    },
  ])

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


  const classes = useStyles();

  const Step1 = () => {
    return (
      <>

        <Box className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute" className={classes.appBar}>
            {/* <Toolbar> */}
            <Paper component="form" className='w-100 d-flex justify-content-between px-3 py-2'>

              <InputBase
                fullWidth
                placeholder="Search Product"
                inputProps={{ 'aria-label': 'search product' }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            {/* </Toolbar> */}
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
              <h5>Categories</h5>

              {['Appliances', 'Audio', 'Cameras & Camcorders', 'Car Electronics & GPS', 'Cell Phones', 'Computers & Tablets', 'Health, Fitness & Beauty', 'Office & School Supplies', 'TV & Home Theater', 'Video Games'].map((text, index) => (
                <ListItem button key={text}>

                  <FormControlLabel
                    label=""
                    control={
                      <Checkbox
                        checked={acceptPolicy.checked}
                        onChange={handleChange2}
                        name="checked"
                        color="primary"
                      />
                    }
                  />
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

          </Drawer>
          <Box component="main" className={classes.content}>
            <Box className={classes.toolbar} />

            <div className="container">
              <div className="row">

                {shopItems.map((s) => (
                  <div className="col-md-4 my-3">
                    <Card className={classes.cardroot}>
                    <CardActionArea>
                        <CardMedia
                          className='p-3'
                        component="img"
                        alt=""
                        height="140"
                          image={s.image}
                        title=""
                      />
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                            {s.category}
                          </Typography>
                        <div className="d-flex justify-content-between">
                        <Typography gutterBottom variant="h6" component="h6">
                          {s.itemName}
                        </Typography>
                          <div className="d-flex flex-column">
                            <span className='text-dark' style={{textDecoration: 'line-through'}}>
                              {s.actualPrice}
                            </span>
                            <span className='text-danger'>
                              {s.discountedPrice}
                            </span>
                          </div>

                        </div>

                        
                        <Typography variant="body2" color="textSecondary" component="p">
                          {s.itemPeriod}
                        </Typography>
                        </CardContent>
                        
                    </CardActionArea>
                    <CardActions className='mb-0' style={{backgroundColor: '#7367F0'}}>
                    <Button className='w-100 text-white' >
                          View in Cart
                      </Button>
                    </CardActions>
                  </Card></div>
                ))}
              </div>
            </div>





          </Box>
        </Box>


      </>
    )
  }



  return (
    <>


      <Box className='mt-3'>
        <Step1 />
      </Box>
    </>
  )
}


export { Shop }
