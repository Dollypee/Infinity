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
import Button from "@material-ui/core/Button";
import { Checkbox, FormControlLabel } from '@material-ui/core';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const faker = require('faker');


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


  useEffect(() => {
    let datalength = 30
    let sn = 1;
    const holdingTank = [... Array(datalength)] 
                     .map(_ => ({ 
                         sn: sn++,
                       name: faker.name.findName(),
                         
                       productRole: faker.random.word(),
                         affiliate: faker.random.boolean(),
                       date: new Date(faker.date.recent()).toDateString(),
                       rank: 'Affiliate',
                       volume: faker.datatype.number(),
                      image: faker.image.nature()
                     }));
    setData(holdingTank) 
  
  }, [setData])

  return (
    <>
           <div className='card'>
        <div className='card-body row py-3'>
          <div className="col-md-4 mt-2 ">
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
          <div className="col-md-4 mt-2">
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
          <div className="col-md-4 mt-2">
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
                  Active
                </MenuItem>
                <MenuItem value={1}>
                  Inactive
                </MenuItem>
                <MenuItem value={2}>
                  Pending
                </MenuItem>
                
              </Select>
            </FormControl>
          </div>
          <div className="col-md-6 mt-2 ">
           <h3>Total Personal Users : 30</h3>
          </div>
          <div className="col-md-6 mt-2">
           <h3>Total Overall Users : 60</h3>
          </div>

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
                title: '',
                render: (rowData) => {
                  return <img className='img-fluid' style={{width: '50px', height: '50px', borderRadius: '50%'}} src={rowData.image} alt="UserPics" />
                }
              },
              {
                title: 'Name',
                field: 'name'
              },
              {
                title: 'Product Role',
               field: 'productRole'
              },
              {
                title: 'Is Affiliate',
                field: 'affiliate'
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
                  return <div><p><FormControlLabel
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
                /> Left Leg</p><p><FormControlLabel
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
