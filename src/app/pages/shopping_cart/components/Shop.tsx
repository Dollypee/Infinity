import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link, NavLink } from 'react-router-dom'
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

  const [shopItems, setShopItems] = React.useState([
    {
      id: 1,
      image: "https://i.ibb.co/dQt4cPq/wristwatch.jpg",
      category: "Appliances",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 2nd",
      itemDescription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias fugit ullam inventore amet consequatur facilis sit esse explicabo. Et quas ducimus, dicta pariatur officia quasi nemo sapiente fugit similique quo!"
    },
    {
      id: 2,
      image: "https://i.ibb.co/wwRRHqk/phone.jpg",
      category: "Appliances",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Jan 31st",
      itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti aut, tempore id quam voluptatum, sapiente quis asperiores molestiae reiciendis consectetur! Possimus quam provident praesentium qui perferendis voluptatibus fugit dolorem."
    },
    {
      id: 3,
      image: "https://i.ibb.co/PN0D5c6/airpod.jpg",
      category: "Computers & Tablets",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 6th",
      itemDescription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias fugit ullam inventore amet consequatur facilis sit esse explicabo. Et quas ducimus, dicta pariatur officia quasi nemo sapiente fugit similique quo!"
    },
    {
      id: 4,
      image: "https://i.ibb.co/dQt4cPq/wristwatch.jpg",
      category: "Computers & Tablets",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 12th",
      itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti aut, tempore id quam voluptatum, sapiente quis asperiores molestiae reiciendis consectetur! Possimus quam provident praesentium qui perferendis voluptatibus fugit dolorem."
    },
    {
      id: 5,
      image: "https://i.ibb.co/wwRRHqk/phone.jpg",
      category: "Computers & Tablets",
      actualPrice: "$190",
      discountedPrice: "$80",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 14th",
      itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti aut, tempore id quam voluptatum, sapiente quis asperiores molestiae reiciendis consectetur! Possimus quam provident praesentium qui perferendis voluptatibus fugit dolorem."
    },
    {
      id: 6,
      image: "https://i.ibb.co/PN0D5c6/airpod.jpg",
      category: "Computers & Tablets",
      actualPrice: "$100",
      discountedPrice: "$50",
      itemName: "Apple watch series 5",
      itemPeriod: "Feb 11th",
      itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti aut, tempore id quam voluptatum, sapiente quis asperiores molestiae reiciendis consectetur! Possimus quam provident praesentium qui perferendis voluptatibus fugit dolorem."
    },
  ])

  const [selected, setSelected] = React.useState({
    checked: false,
  })

  const handleChange = (event) => {
    setSelected({ [event.target.name]: event.target.checked })
  }

  const [searchValue, setSearchValue] = React.useState('')



  const filteredItem = shopItems.filter(s => {
    return s.itemName.toLowerCase().includes(searchValue.toLowerCase()) || s.category.toLowerCase().includes(searchValue.toLowerCase())
  })

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const classes = useStyles();

  return (
    <>


      <Box className='mt-3'>
        <Box className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute" className={classes.appBar}>
            {/* <Toolbar> */}
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
                        icon={<CircleUnchecked />}
                        checkedIcon={<CircleCheckedFilled />}
                        // checked={ }
                        // onChange={}
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
                      <Link to={{pathname:'/shopping_cart/details', state:{s}}}>
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
                      </Link>
                      <CardActions className='mb-0 text-white' style={{ backgroundColor: '#7367F0', transition: `color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,background 0s,border 0s,-webkit-box-shadow .15s ease-in-out` }}>
                        <Button className='w-100 text-white' onClick={() => console.log('hello')}>
                        <ShoppingCartIcon/> <span className='px-3'> View in Cart</span>
                        </Button>
                      </CardActions>
                    </Card></div>
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
