/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useContext, FC} from 'react'
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
import {ListContext, ListProvider} from './ArrayContext/ListContext'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomI from './ZoomI'



function RenderArray({zoom}) {
  const [lists, setLists] = useContext(ListContext)
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



const Binary_Tree_Page: FC = () => (
  <>
    <div className='card'>
      {/* begin::Body */}
      <div style={{maxWidth: '100%'}} className='card-body py-3'>
        Binary_Tree_Page
        <SearchUser />
        <ZoomI  width={700}
      height={1000}/>
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
      <ListProvider>
        <Binary_Tree_Page />
      </ListProvider>
    </>
  )
}

export {BinaryTreePage}
