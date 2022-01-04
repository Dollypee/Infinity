/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {Tree, TreeNode} from 'react-organizational-chart'
import User from './User'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  MixedWidget12,
  TablesWidget13,
} from '../../../_metronic/partials/widgets'
import MemberStatus from './MemberStatus'
import SearchUser from './SearchUser'

const ArrayList = {
  name: 'bamzz',
  rank: 'manager',
  status: 'active',
  children: [
    {
      name: 'josuu',
      rank: 'manager',
      status: 'active',
      children: [
        {
          name: 'bamzz',
          rank: 'manager',
          status: 'active',
          children: '',
        },
        {
          name: 'bamzz',
          rank: 'manager',
          status: 'active',
          children: '',
        },
        {
          name: 'bamzz',
          rank: 'manager',
          status: 'active',
          children: '',
        },
      ],
    },
    {
      name: 'bamzz',
      rank: 'manager',
      status: 'active',
      children: [
        {
          name: 'bamzz',
          rank: 'manager',
          status: 'active',
          children: '',
        },
      ],
    },
    {
      name: 'bamzz',
      rank: 'manager',
      status: 'active',
      children: [
        {
          name: 'bamzz',
          rank: 'manager',
          status: 'active',
          children: '',
        },
      ],
    },
  ],
}

function RenderArray(props) {
  const data = props.data
  const RenderList = data.children.map((list) => (
      <TreeNode label={<User name={list.name} />}>
        {list.children.map((el) => (
          <TreeNode label={<User name={el.name} />} >
          </TreeNode>
        ))}
      </TreeNode>
  ))
  return (
    <div>
      <Tree label={<User name={data.name}/>}>{RenderList}</Tree>
    </div>
  )
}

const Binary_Tree_Page: FC = () => (
  <>
    <div className='card'>
      {/* begin::Body */}
      <div className='card-body py-3'>
        Binary_Tree_Page
        <SearchUser />
        <RenderArray data={ArrayList} />
        <MemberStatus />
      </div>
      {/* begin::Body */}

      <TablesWidget13 className='card' />
    </div>
  </>
)

const BinaryTreePage: FC = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Referral Network'})}</PageTitle>
      <Binary_Tree_Page />
    </>
  )
}

export {BinaryTreePage}
