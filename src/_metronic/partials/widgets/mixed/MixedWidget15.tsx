import React from 'react'
import './MixedWidget15.css'

type Props = {
    content1: string
    content2: string
 
  }
  
const MixedWidget15: React.FC<Props> = ({content1, content2}) => {
// export default function MixedWidget15() {
    return (
        <div className='divMain15'>

        <div className='divMainbody15'>
         {content1}
        </div>
        <div className='divMainbody15'>
              {content2}
        </div>
       
        
        
    </div>
    )
}

export {MixedWidget15}