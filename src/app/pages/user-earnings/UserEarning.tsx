/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import MaterialTable, { Column } from "@material-table/core";
import tableIcons from "../../constants/TableIcons";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";

const faker = require('faker');

const UserEarning = () => {
  interface IEarning {
    category: string;
    amount: number;
    transactionDate: string;
  }

  const [transaction, setTransaction] = React.useState([])
  const [category, setCategory] = React.useState(0)
  const [daterange, setDaterange] = React.useState(0)
  const [totalAmount, setTotalAmount] = React.useState(0)

  const data: Array<IEarning> = [...transaction];

  const columns: Array<Column<IEarning>> = [
    { title: "Category", field: "category" },
    { title: "Amount", field: "amount", type: 'numeric' },
    { title: "Transaction Date", field: "transactionDate" },
  ];

  function formatPrice(Symbol: any) {
    return function(value: any) {
       const price = (value);
       return `${Symbol} ${price}`;
    };
 }
 
  const PriceLabel = formatPrice('£');

  useEffect(() => {
    let datalength = 30
    let sn = 1;
    const userEarnings = [...Array(datalength)]
      .map(_ => ({
        sn: sn++,
        category: faker.commerce.department(),
        amount: faker.commerce.price(),
        transactionDate: new Date(faker.date.recent()).toDateString(),
      }));
      const result = userEarnings.reduce((amount, sum) => {
        // return the sum with previous value
        return parseFloat(amount) + parseFloat(sum.amount);
        // set initial value as 0
      }, 0);
    setTransaction(userEarnings)
    setTotalAmount(result)

  }, [setTransaction])


  return (
    <>
      <div className='card'>
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
                Date Range
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
          <div className='col-md-6 mt-2'>
            <Button className='btn btn-sm btn-primary mx-2'>Search</Button>
            <Button className='btn btn-sm btn-secondary mx-2'>Clear</Button>
          </div>

        </div>
      </div>
      <div className='mt-4'>
          <div className='card'>
            <div className='card-body py-2 d-flex justify-content-end'>
              <span className='fw-bold'>Total Commission Earned:  {PriceLabel(totalAmount)}</span>
            </div>
        </div>
        <div className='mt-3'>
          {/* begin::Table container */}
          <MaterialTable<RowInterface>
            icons={tableIcons}
            title=""
            style={{ whiteSpace: "nowrap" }}
            columns={[
              {
                title: 'S/N',
                render: (rowData) => rowData.tableData.id + 1,
              }, ...columns
            ]}
            data={data}
            // actions={[
            // ]}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              filtering: false,
              padding: 'dense',
              pageSize: 10,
              headerStyle: {
                fontSize: '13px',
                backgroundColor: '#ccc',
                borderBottomColor: '#111',
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

const UserEarningPage = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'User Earnings' })}</PageTitle>
      <UserEarning />
    </>
  )
}

export { UserEarningPage }


