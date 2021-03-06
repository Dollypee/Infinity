import React, { FC, useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, NavLink } from 'react-router-dom'
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
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import { NavLink } from 'react-bootstrap-v5'
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
import data from '../components/data';
import categories from '../components/categories'
import { Toolbar1 } from '../../../../_metronic/layout/components/toolbar/Toolbar1'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth + 30}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  drawer: {
    position: "relative",
    marginLeft: "auto",
    zIndex: 0,
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

  const [shopItems, setShopItems] = useState(data)
  const [category, setCategory] = useState(categories)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(shopItems)
  }, [setCartItems])
  const getTotalItems = (items) => cartItems.reduce((ack, item) => ack + item.actualPrice, 0)

  const [selected, setSelected] = useState({
    checked: false,
  })

  const handleChange = (event) => {
    setCategory({ [event.target.name]: event.target.checked })
  }

  const [searchValue, setSearchValue] = useState('')



  const filteredItem = shopItems.filter(s => {
    return s.itemName.toLowerCase().includes(searchValue.toLowerCase()) || s.category.toLowerCase().includes(searchValue.toLowerCase())
  })


  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const onAdd = (data) => {
    const exist = cartItems.find(x => x.id === data.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === data.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...data, qty: 1 }])
    }
  }
  console.log(cartItems)

  const classes = useStyles();

  return (
    <>


      <Box className='mt-3'>
        <Box className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute" className={classes.appBar}>
            <Paper component="form" className='w-100 d-flex justify-content-between px-3 py-2'>

              <InputBase
                fullWidth
                placeholder="Search Product"
                inputProps={{ 'aria-label': 'search product' }}
                value={searchValue}
                onChange={handleSearchChange}
              />
              <IconButton aria-label="search">
                <SearchIcon onClick={() => setShopItems(filteredItem)} />
              </IconButton>
            </Paper>
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

              {category.map((text, index) => (
                <ListItem button key={index}>

                  <FormControlLabel
                    label=""
                    control={
                      <Checkbox
                        icon={<CircleUnchecked />}
                        checkedIcon={<CircleCheckedFilled />}
                        // value={searchValue}

                        // checked={ }
                        // onChange={handleChange}
                        name="checked"
                        style={{ color: "#7367F0" }}
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

                {filteredItem.map((s) => (
                  <div className="col-md-4 my-3">
                    <Card className={classes.cardroot}>
                      <Link to={{ pathname: '/shopping_cart/details', state: { s } }}>
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
                                <span className='text-dark' style={{ textDecoration: 'line-through' }}>
                                  ${s.actualPrice}
                                </span>
                                <span className='text-danger'>
                                  ${s.discountedPrice}
                                </span>
                              </div>

                            </div>


                            <Typography variant="body2" color="textSecondary" component="p">
                              {s.itemStocks} Stocks
                            </Typography>
                          </CardContent>

                        </CardActionArea>
                      </Link>
                      <Link to={{ pathname: '/shopping_cart/cart', state: { cartItems } }}>

                        <CardActions className='mb-0 text-white' style={{ backgroundColor: '#7367F0', transition: `color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,background 0s,border 0s,-webkit-box-shadow .15s ease-in-out` }}>
                          <Button onClick={() => onAdd(s)} className='text-white text-center w-100' style={{ backgroundColor: '#7367F0' }} >
                            <ShoppingCartIcon /> <span className='px-3'>{shopItems.includes(cartItems.map((cart) => cart)) ? 'Add to Cart' : 'View in Cart'} </span>
                          </Button>
                        </CardActions>
                      </Link>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  )
}


export { Shop }
