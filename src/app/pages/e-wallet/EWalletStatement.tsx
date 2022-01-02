/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import MaterialTable, { Column } from "@material-table/core";
import tableIcons from "../../constants/TableIcons";
const faker = require('faker');


const E_WalletStatement: FC = () => {

  interface IE_WalletStatement {
    description: string;
    amount: number;
    transactionDate: string;
    balance: number;
  }
  const [transaction, setTransaction] = React.useState([])
  const [totalBalance, setTotalBalance] = React.useState(0)

  const data: Array<IE_WalletStatement> = [...transaction];

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
    const ewalletStatement = [... Array(datalength)] 
                     .map(_ => ({ 
                         sn: sn++,
                         description: faker.random.words(),
                         amount: faker.commerce.price(),
                       transactionDate: new Date(faker.date.recent()).toDateString(),
                         balance: faker.commerce.price(),
                     }));
                     const result = ewalletStatement.reduce((amount, sum) => {
                      // return the sum with previous value
                      return parseFloat(amount) + parseFloat(sum.balance);
                      // set initial value as 0
                    }, 0);
    setTransaction(ewalletStatement) 
    setTotalBalance(result)
  
  }, [setTransaction])

  return (
    <>
      <div className='mt-1'>
      <div className='card'>
            <div className='card-body py-2 d-flex justify-content-end'>
              <span className='fw-bold'>E-Wallet Balance:  <span className='text-primary'>{PriceLabel(totalBalance)}</span></span>
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
              },
              {
                title: 'Description',
                field: 'description'
              },
              {
                title: 'Amount',
                render: (rowData) => {
                  return <p style={{ color: "#2B9E46" }}> {'+' + ' ' + PriceLabel(rowData.amount)}</p>
                },
              },
              {
                title: 'Transaction Date',
                field: 'transactionDate'
              },
              {
                title: 'Balance',
                render: (rowData) =>
                    PriceLabel(rowData.balance),  
                }

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

const E_WalletStatementPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'E-Wallet Statement' })}</PageTitle>
      <E_WalletStatement />
    </>
  )
}

export { E_WalletStatementPage }
