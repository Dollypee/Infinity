

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useContext, FC} from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {Tree, TreeNode} from 'react-organizational-chart'
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
    TablesWidget13
  } from '../../../_metronic/partials/widgets'
import MemberStatus from './MemberStatus'
import SearchUser from './SearchUser'
import User from './User'
import {UniListContext, ListProvider} from './ArrayContext/UniListContext'






function RenderArray() {
  const [lists, setLists] = useContext(UniListContext)
  console.log(lists)
  const RenderList = lists.children.map((list) => (
    <TreeNode className='treeNode' label={<User name={list.name} />}>
      {list.children.map((el) => (
        <TreeNode className='treeNode' label={<User name={el.name} />}>
          {el.children.map((one) => (
            <TreeNode className='treeNode' label={<User name={one.name} />}></TreeNode>
          ))}
        </TreeNode>
      ))}
    </TreeNode>
  ))
  return (
    <div>
      <Tree label={<User name={lists.name} />}>{RenderList}</Tree>
    </div>
  )
}

const Unilevel_Tree_Page: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
      Unilevel_Tree_Page
      <SearchUser />
        <RenderArray />
        <MemberStatus />
      </div>
      {/* begin::Body */}

    <TablesWidget13
    className='card'
    />
      
   
  
    
    
    </div>
  </>
)

const UnilevelTreePage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Referral Network' })}</PageTitle>
      <ListProvider>
        <RenderArray />
      </ListProvider>
      <Unilevel_Tree_Page />
    </>
  )
}

export {UnilevelTreePage }
