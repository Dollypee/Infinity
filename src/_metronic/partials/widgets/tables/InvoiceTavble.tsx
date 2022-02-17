/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState, Suspense } from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import { useIntl } from 'react-intl'
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
import { Card, Typography, Grid, colors, Box, AppBar, Toolbar, IconButton, CircularProgress } from "@material-ui/core";
import DownloadIcon from '@material-ui/icons/CloudDownload';
import { blue, green } from "@material-ui/core/colors";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import MoneyIcon from "@material-ui/icons/Money";
import { PersonRounded, Delete, Launch, Close } from "@material-ui/icons";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/core/styles";
import { KTSVG, toAbsoluteUrl } from '../../../helpers';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import logo from '../../../assets/images/infinityLogo.png';
import address from 'address';


type Props = {
  className: string
}


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#9C47DF",
    color: '#fff'
  },
  title: {
    marginLeft: theme.spacing(4),
    flex: 1,
    color: '#fff'
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InvoiceTable: React.FC<Props> = ({ className }) => {

  interface I_InvoiceTable {
    orderId: number;
    status: boolean;
    date: string;
    amount: number;
  }

  const data: Array<I_InvoiceTable> = [
    {
      orderId: 102442345,
      status: true,
      date: "Mar 10, 2023",
      amount: 38.00
    },
    {
      orderId: 102446789,
      status: false,
      date: "Jun 23, 2023",
      amount: 38.00
    },
    {
      orderId: 108445788,
      status: true,
      date: "Aug 11, 2023",
      amount: 38.00
    },
    {
      orderId: 346545788,
      status: false,
      date: "Sep 13, 2023",
      amount: 38.00
    },
    {
      orderId: 103755788,
      status: false,
      date: "Jan 07, 2023",
      amount: 38.00
    },
    {
      orderId: 102445788,
      status: true,
      date: "Mar 23, 2023",
      amount: 38.00
    },

  ]

  const classes = useStyles();

  const [invoice, setInvoice] = useState(false)
  const [invoiceData, setInvoiceData] = useState({})

  const handleInvoice = (data) => {
    setInvoiceData(data);
    setInvoice(true);
    console.log(invoiceData)
  }

  const handleCloseInvoice = () => {
    setInvoice(false)
  }

  const InvoiceView = (data) => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body ">
                  <Paper elevation={2}>
                  <div className='mt-4 p-5'>
                    <div className="d-flex justify-content-between">
                      <img className='img-fluid' src={logo} alt="Infinity Logo" />
                      <span className='d-flex align-items-center justify-content-center align-self-center justify-self-center'>Invoice {'#' + data.orderId}</span>
                    </div>
                    <div className='d-flex justify-content-between mt-5 p-5'>
                      <div>
                        <address>Office 149, 450 South Brand Brooklyn  <br />
                        San Diego County, CA 91905, India <br />
                          +1 (123) 456 7891, +44 (876) 543 2198
                        </address>
                      </div>
                      <div className='d-flex flex-column'>
                        <span>Date Issued: Feb 10, 2022</span>
                        <span>Due Date: {data.date }</span>
                      </div>
                    </div>
                  </div>
                  <hr className='mt-5' />
                  <div className="mt-5">
                    <div className="d-flex justify-content-between p-5">
                      <div className='d-flex flex-column'>
                      <span>Invoice To:</span>
                        <h5 className='mt-5'>Max Smith</h5>
                        <span className='text-gray-800 text-hover-primary'>15, Max street, Smith Avenue,MaxSmith</span>
                        <span className='text-gray-800 text-hover-primary'>maxsmith@max.com</span>

                      </div>
                      <div className='d-flex flex-column'>
                      <span>Payment Details:</span>
                        <div className='mt-5 d-flex flex-column'>
                          <span><span className='fw-bolder'>Amount:</span> {data.amount}</span>
                          <span><span className='fw-bolder'>Status:</span> {data.status ? 'Active' : 'Inactive'} </span>
                          <span><span className='fw-bolder'>Expiration Date:</span> { data.date}</span>
                          
                      </div>
                      </div>

                    </div>
                      
                    </div>
                    </Paper>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <Paper elevation={2}>
                <div className='my-3 text-center p-5'>
                <Button className='text-white' style={{background: '#9C47DF'}}>Download</Button>
                    </div>
                    </Paper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="card">
      {/* begin::Header */}
      <div className='card-header border-0' style={{ marginBottom: "-45px", zIndex: 1 }}>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Invoices</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_1'
              >
                This Year
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_2'
              >
                2021
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_3'
              >
                2020
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='tab-content'>
        {/* begin::Tap pane */}
        <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
          {/* begin::Table container */}
          <MaterialTable<I_InvoiceTable>
            icons={tableIcons}
            title=""
            style={{ whiteSpace: "nowrap" }}
            components={{
              Container: props => <Paper {...props} elevation={0} />
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
                title: 'ORDER ID',
                field: 'orderId',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
                render: (rowData) => {
                  return <div onClick={() => ( setInvoiceData(rowData), setInvoice(true) )} style={{ cursor: "pointer" }}>{rowData.orderId}</div>
                }
              },
              {
                title: 'Amount',
                field: 'amount',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
                render: (rowData) => {
                  return <div>{'$' + rowData.amount}</div>
                }
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
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated badge' style={{ backgroundColor: "#9C47DF", color: "#fff", padding: "4px", borderRadius: "20px" }}>
                        Active
                        {/* <CheckCircleOutlineRounded
                        style={{ color: "#7367F0" }}
                      />  */}
                      </div>

                    )
                  } else {
                    return (
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated badge' style={{ backgroundColor: "#ccd", color: "#fff", padding: "4px", borderRadius: "20px" }}>
                        Inactive
                      </div>
                    )
                  }
                },
              },

              {
                title: 'Date',
                field: 'date',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
              },

            ]}
            data={data}
            actions={[

              {
                icon: () => <Launch style={{ color: "#9C47DF", }} />,
                tooltip: "Preview",
                onClick: (event, rowData) => {
                  setInvoice(true);
                  // handleInvoice(rowData)
                  setInvoiceData(rowData)
                },
              },
              {
                icon: () => <DownloadIcon style={{ color: "#9C47DF", }} />,
                tooltip: "Download",
                onClick: (event, rowData) => {
                  if (!Array.isArray(rowData)) {
                  setInvoice(true);
                  // handleInvoice(rowData)
                  setInvoiceData(rowData)
                  }
                },
              },
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
          {/* end::Table */}
        </div>
        {/* end::Tap pane */}
        {/* begin::Tap pane */}
        <div className='tab-pane fade' id='kt_table_widget_5_tab_2'>
          {/* begin::Table container */}
          <MaterialTable<I_InvoiceTable>
            icons={tableIcons}
            title=""
            style={{ whiteSpace: "nowrap" }}
            components={{
              Container: props => <Paper {...props} elevation={0} />
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
                title: 'ORDER ID',
                field: 'orderId',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
              },
              {
                title: 'Amount',
                field: 'amount',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
                render: (rowData) => {
                  return <div>{'$' + rowData.amount}</div>
                }
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
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated badge' style={{ backgroundColor: "#9C47DF", color: "#fff", padding: "4px", borderRadius: "20px" }}>
                        Active
                        {/* <CheckCircleOutlineRounded
                        style={{ color: "#7367F0" }}
                      />  */}
                      </div>

                    )
                  } else {
                    return (
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated badge' style={{ backgroundColor: "#ccd", color: "#fff", padding: "4px", borderRadius: "20px" }}>
                        Inactive
                      </div>
                    )
                  }
                },
              },

              {
                title: 'Date',
                field: 'date',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
              },

            ]}
            data={data}
            actions={[
              {
                icon: () => <Launch style={{ color: "#9C47DF", }} />,
                tooltip: "Download",
                onClick: (event, rowData) => {
                  // this.setState({
                  //   paymentDrawer: true,
                  //   user: rowData,
                  // });
                },
              },
              {
                icon: () => <DownloadIcon style={{ color: "#9C47DF", }} />,
                tooltip: "Download",
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
          {/* end::Table */}
        </div>
        {/* end::Tap pane */}
        {/* begin::Tap pane */}
        <div className='tab-pane fade' id='kt_table_widget_5_tab_3'>
          {/* begin::Table container */}
          <MaterialTable<I_InvoiceTable>
            icons={tableIcons}
            title=""
            style={{ whiteSpace: "nowrap" }}
            components={{
              Container: props => <Paper {...props} elevation={0} />
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
                title: 'ORDER ID',
                field: 'orderId',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
              },
              {
                title: 'Amount',
                field: 'amount',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
                render: (rowData) => {
                  return <div>{'$' + rowData.amount}</div>
                }
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
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated badge' style={{ backgroundColor: "#9C47DF", color: "#fff", padding: "4px", borderRadius: "20px" }}>
                        Active
                        {/* <CheckCircleOutlineRounded
                        style={{ color: "#7367F0" }}
                      />  */}
                      </div>

                    )
                  } else {
                    return (
                      <div className='text-center progress-bar progress-bar-striped progress-bar-animated badge' style={{ backgroundColor: "#ccd", color: "#fff", padding: "4px", borderRadius: "20px" }}>
                        Inactive
                      </div>
                    )
                  }
                },
              },

              {
                title: 'Date',
                field: 'date',
                cellStyle: {
                  borderBottom: "0.5px dashed #ccc"
                },
              },

            ]}
            data={data}
            actions={[
              {
                icon: () => <Launch style={{ color: "#9C47DF", }} />,
                tooltip: "Download",
                onClick: (event, rowData) => {
                  // this.setState({
                  //   paymentDrawer: true,
                  //   user: rowData,
                  // });
                },
              },
              {
                icon: () => <DownloadIcon style={{ color: "#9C47DF", }} />,
                tooltip: "Download",
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
          {/* end::Table */}
        </div>
        {/* end::Tap pane */}
      </div>



      {/* Set Dialog for Invoice Data */}
      <Box>
        <Dialog fullScreen open={invoice} onClose={handleCloseInvoice} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleCloseInvoice} aria-label="close">
                <Close />
              </IconButton>
              <Typography variant="h5" className={classes.title}>
                Invoice Details
              </Typography>
            </Toolbar>
          </AppBar>
          <Suspense
            fallback={
              <div
                className="loader-view"
                style={{
                  height: "calc(100vh - 265px)"
                }}
              >
                <CircularProgress />
              </div>
            }
          >
            <InvoiceView data={invoiceData} />
          </Suspense>
        </Dialog>
      </Box>
      {/* end::Body */}
    </div>
  )
}

export { InvoiceTable }
