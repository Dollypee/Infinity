/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../helpers'
import MaterialTable, { Column } from "@material-table/core";
import tableIcons from "../../../../app/constants/TableIcons";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { Checkbox, FormControlLabel, Paper } from '@material-ui/core';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineRounded from '@material-ui/icons/CheckCircleOutlineRounded'
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { Card, Typography, Grid, colors } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import MoneyIcon from "@material-ui/icons/Money";
import {PersonRounded, Autorenew, Delete} from "@material-ui/icons";
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

type Props = {
  className: string
}

const TableInfinityType: React.FC<Props> = ({ className }) => {
  
  interface I_SubscriptionsTable {
    subscription: string;
    status: boolean;
    date: string;
    amount: number;
  }

  const data:Array<I_SubscriptionsTable> = [
    {
      subscription: "Affiliate Bronze",
      status: true,
      date: "Mar 23, 2023",
      amount: 2450
    },
    {
      subscription: "Affiliate Silver",
      status: false,
      date: "Feb 20, 2023",
      amount: 2830
    },
    {
      subscription: "Affiliate Gold",
      status: true,
      date: "Mar 23, 2023",
      amount: 2200
    },
    {
      subscription: "Affiliate Diamond",
      status: true,
      date: "Jan 23, 2023",
      amount: 2160
    },
    {
      subscription: "Affiliate Platinum",
      status: false,
      date: "Mar 23, 2023",
      amount: 3000
    },
    {
      subscription: "Instaslots-#1",
      status: false,
      date: "Dec 23, 2023",
      amount: 2600
    },
    {
      subscription: "Instaslots-#2",
      status: true,
      date: "Mar 23, 2023",
      amount: 2300
    },
    {
      subscription: "Instaslots-#3",
      status: false,
      date: "Aug 23, 2023",
      amount: 2400
    },

  ]

  return (
    <div className="card">
        

        <MaterialTable<I_SubscriptionsTable>
            icons={tableIcons}
            title="Subscriptions"
        style={{ whiteSpace: "nowrap"}}
        components={{
          Container: props => <Paper {...props} elevation={0}/>
     }}
            columns={[
              {
                title: 'S/N',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
                render: (rowData) => rowData.tableData.id + 1,
              },
              {
                title: 'Packages',
                field: 'subscription',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
              },
              {
                title: 'Status',
                field: 'status',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
                render: (rowData) => {
                  if (rowData.status) {
                    return (
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated badge' style={{ backgroundColor: "#9C47DF", color: "#fff", padding: "4px", borderRadius: "20px"}}>
                         Active
                      {/* <CheckCircleOutlineRounded
                        style={{ color: "#7367F0" }}
                      />  */}
                      </div>
                     
                    )
                  } else {
                    return (
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated badge' style={{ backgroundColor: "#ccd", color: "#fff", padding: "4px", borderRadius: "20px"}}>
                         Inactive
                      </div>
                    )
                  }
                },
              },
              {
                title: 'Amount',
                field: 'amount',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
                render: (rowData) => {
                  return <div>{ '$' + rowData.amount}</div>
                }
              },
              {
                title: 'Expiration Date',
                field: 'date',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
              },

            ]}
            data={data}
        actions={[
            
            {
              icon: () => <Autorenew style={{ color: "#9C47DF", }} />,
              tooltip: "Autorenew",
              onClick: (event, rowData) => {
                // this.setState({
                //   paymentDrawer: true,
                //   user: rowData,
                // });
              },
            },
            // {
            //   icon: () => <Delete style={{ color: "#f00" }} />,
            //   tooltip: "Delete",
            //   onClick: (event, rowData) => {
            //     // this.setState({
            //     //   paymentDrawer: true,
            //     //   user: rowData,
            //     // });
            //   },
            // }
            ]}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              filtering: false,
              search: false,
              // padding: '10px',
              pageSize: 5,
              headerStyle: {
                fontSize: '13px',
                backgroundColor: '#F3F2F7',
                borderBottomColor: '#ccc',
                paddingTop: '5px',
                paddingBottom: '5px',
                fontWeight: 600
              },
            }}
          />
    </div>
  )
}

export {TableInfinityType}
