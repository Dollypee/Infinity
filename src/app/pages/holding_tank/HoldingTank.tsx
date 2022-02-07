/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import MaterialTable, { Column } from "@material-table/core";
import tableIcons from "../../constants/TableIcons";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { Checkbox, FormControlLabel } from '@material-ui/core';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineRounded from '@material-ui/icons/CheckCircleOutlineRounded'
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { Card, Typography, Grid, colors } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import MoneyIcon from "@material-ui/icons/Money";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/core/styles";

const faker = require('faker');

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  item: {
    padding: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      "&:not(:last-of-type)": {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
    [theme.breakpoints.down("sm")]: {
      "&:not(:last-of-type)": {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  valueContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginLeft: theme.spacing(1),
  },
}));

const HoldingTank: FC = () => {

  interface I_HoldingTank {
    name: string;
    productRole: string;
    affiliate: boolean;
    date: string;
    rank: string;
    position: string;
    volume: number;
    image: string;
  }
  const [dat, setData] = useState([])
  const [category, setCategory] = useState(0)
  const [daterange, setDaterange] = useState(0)

  const data: Array<I_HoldingTank> = [...dat];

  const classes = useStyles();


  useEffect(() => {
    let datalength = 30
    let sn = 1;
    const holdingTank = [... Array(datalength)] 
                     .map(_ => ({ 
                         sn: sn++,
                       name: faker.name.findName(),
                      username: faker.internet.userName(),
                       productRole: faker.random.word(),
                         affiliate: faker.random.boolean(),
                       date: new Date(faker.date.recent()).toLocaleDateString(),
                       rank: 'Affiliate',
                       volume: faker.datatype.number(),
                      image: faker.image.nature()
                     }));
    setData(holdingTank) 
  
  }, [setData])

  return (
    <>
      <div className="row">
        <div className="col-md-3">
        <Card className={clsx(classes.root)} style={{backgroundColor: "#9C47DF"}}>
        <div className="d-flex align-items-center flex-nowrap py-lg-2">
        <div className="mr-3">
        <Typography variant="h3">
                {/* {appliedApplicants} */}
                <PersonRoundedIcon
                  style={{
                    color: "#fff",
                    fontSize: 50,
                    marginLeft: 10,
                    marginBottom: 10,
                  }}
                />
            </Typography>
          </div>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h3 className=" jr-font-weight-black mb-1 text-white">Total Personal Users</h3>
          <h2 className="mb-0 text-white">30</h2>
        </div>
      </div>
    </Card>
        </div>
        <div className="col-md-3">
        <Card className={clsx(classes.root)} style={{backgroundColor: "#6E29D0"}}>
      <div className="d-flex align-items-center flex-nowrap py-lg-2">
        <div className="mr-3">
        <Typography variant="h3">
                {/* {appliedApplicants} */}
                <PersonRoundedIcon
                  style={{
                    color: "#fff",
                    fontSize: 50,
                    marginLeft: 10,
                    marginBottom: 10,
                  }}
                />
            </Typography>
          </div>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h3 className=" jr-font-weight-black mb-1 text-white">Total Overall Users</h3>
          <h2 className="mb-0 text-white">60</h2>
        </div>
      </div>
     
    </Card>
        </div>
      </div>
     
      <div className='card mt-3'>
        <div className='card-body row py-3'>
          <div className="col-md-3 mt-2 ">
            <FormControl className="w-100 mb-2">
              <InputLabel htmlFor="age-simple">
                  Category
              </InputLabel>
              <Select
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value)
                }}
              >
                <MenuItem value={0}>
                  Any
                </MenuItem>
                <MenuItem value={1}>
                  Referral Commission
                </MenuItem>
                <MenuItem value={2}>
                  Rank Commission
                </MenuItem>
                <MenuItem value={3}>
                  Level Commission
                </MenuItem>
                <MenuItem value={4}>
                  Binary Commission
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3 mt-2">
            <FormControl className="w-100 mb-2">
              <InputLabel htmlFor="age-simple">
                Date Joined
              </InputLabel>
              <Select
                value={daterange}
                onChange={(event) => {
                  setDaterange(event.target.value)
                }}
              >
                <MenuItem value={0}>
                  Overall
                </MenuItem>
                <MenuItem value={1}>
                  Today
                </MenuItem>
                <MenuItem value={2}>
                  This Month
                </MenuItem>
                <MenuItem value={3}>
                  This Year
                </MenuItem>
                <MenuItem value={4}>
                  Custom
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3 mt-2">
            <FormControl className="w-100 mb-2">
              <InputLabel htmlFor="age-simple">
                Status
              </InputLabel>
              <Select
                value={daterange}
                onChange={(event) => {
                  setDaterange(event.target.value)
                }}
              >
                <MenuItem value={0}>
                  All
                </MenuItem>
                <MenuItem value={1}>
                  Affiliate
                </MenuItem>
                <MenuItem value={2}>
                  Non Affiliate
                </MenuItem>
                
              </Select>
            </FormControl>
          </div>
          {/* <div className="col-md-6 mt-2 ">
           <h3>Total Personal Users : 30</h3>
          </div>
          <div className="col-md-6 mt-2">
           <h3>Total Overall Users : 60</h3>
          </div> */}

        </div>
      </div>
      <div className='mt-1'>

        <div className='mt-3'>
          {/* begin::Table container */}
          <MaterialTable<I_HoldingTank>
            icons={tableIcons}
            title=""
            style={{ whiteSpace: "nowrap" }}
            columns={[
              {
                title: 'S/N',
                render: (rowData) => rowData.tableData.id + 1,
              },
              {
                title: 'Name',
                render: (rowData) => {
                  return <div style={{display: "flex", alignItems: "center"}}>
                   <div> <PersonRoundedIcon
                  style={{
                    color: "#7367F0",
                    fontSize: 30,
                    // marginLeft: 10,
                    // marginBottom: 10,
                  }}
                    /></div>
                    <div> <p style={{margin: '0', padding: '0'}}>{rowData.name}
                    </p><span style={{margin: '0', padding: '0'}}>{ rowData.username}</span>
                    </div>
                  </div>
                }
              },
              {
                title: 'Product Role',
               field: 'productRole'
              },
              {
                title: 'Is Affiliate',
                field: 'affiliate',
                render: (rowData) => {
                  if (rowData.affiliate) {
                    return (
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated' style={{ backgroundColor: "#9C47DF", color: "#fff", padding: "4px", borderRadius: "20px"}}>
                         Yes
                      {/* <CheckCircleOutlineRounded
                        style={{ color: "#7367F0" }}
                      />  */}
                      </div>
                     
                    )
                  } else {
                    return (
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated' style={{ backgroundColor: "#ccd", color: "#fff", padding: "4px", borderRadius: "20px"}}>
                         No
                      </div>
                    )
                  }
                },
              },
              {
                title: 'Date of joining',
                field: 'date'
              },
              {
                title: 'Current Rank',
                field: 'rank'  
              },
              {
                title: 'Volume',
                field: 'volume'
              },
              {
                title: 'Position',
                render: (rowData) => {
                  return <div><p style={{margin: '0', padding: '0'}}><FormControlLabel
                  label=""
                  // labelPlacement="start"
                  control={
                    <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CircleCheckedFilled />}
                      name="checked"
                      style={{ color: "#7367F0" }}
                      />
                  }
                /> Left Leg</p><p style={{margin: '0', padding: '0'}}><FormControlLabel
                label=""
                // labelPlacement="start"
                control={
                  <Checkbox
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                    name="checked"
                    style={{ color: "#7367F0" }}
                    />
                }
              /> Right Leg</p></div>
                }  
              }

            ]}
            data={data}
            // actions={[
            // ]}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              filtering: false,
              search: false,
              padding: 'dense',
              pageSize: 10,
              headerStyle: {
                fontSize: '13px',
                backgroundColor: '#F3F2F7',
                borderBottomColor: '#ccc',
                paddingTop: '5px',
                paddingBottom: '5px',
              },
            }}
          />
          {/* end::Table container */}
        </div>
      </div>
  </>
  )
}

const HoldingTankPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Holding Tank' })}</PageTitle>
      <HoldingTank />
    </>
  )
}

export { HoldingTankPage }
