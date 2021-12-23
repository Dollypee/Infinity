import React from 'react';
import "./style.css"


type Props = {
    content1: string
    content2: string
    content3: string
    content4: string
  }
  
const MixedWidget12: React.FC<Props> = ({content1, content2, content3, content4}) => {
// export default function MixedWidget12({content1, content2, content3, content4}) {
    return (
        <div className='divMain12'>

            <div className='divMainbody12'>
                {content1}
            
            </div>
            <div className='divMainbody12'>
                {content2}
            </div>
            <div className='divMainbody12'>
              {content3}
            </div>
            <div className='divMainbody12'>
                {content4}
            </div>
            
        </div>
    )
}

export {MixedWidget12}