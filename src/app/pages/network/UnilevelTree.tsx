

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
import ZoomU from './ZoomU'






function RenderArray({zoom}) {
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
    <div onTouchStart={zoom.dragStart}
    onTouchMove={zoom.dragMove}
    onTouchEnd={zoom.dragEnd}
    onMouseDown={zoom.dragStart}
    onMouseMove={zoom.dragMove}
    onMouseUp={zoom.dragEnd}
    onMouseLeave={() => {
      if (zoom.isDragging) zoom.dragEnd();
    }} style={{ transform: zoom ? zoom.toString(): 1, cursor: zoom.isDragging ? 'grabbing' : 'grab'}}>
      <Tree label={<User name={lists.name} />}>{RenderList}</Tree>
    </div>
  )
}
export default RenderArray


const Unilevel_Tree_Page: FC = () => (
  <>
    <div className='card'>
   
      {/* begin::Body */}
      <div className='card-body py-3'>
      Unilevel_Tree_Page
      <SearchUser />
        <ZoomU width={700}
      height={1000}/>
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
        
      <Unilevel_Tree_Page />
      </ListProvider>
    </>
  )
}

export {UnilevelTreePage }
