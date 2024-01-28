import React from 'react'

const Section = (props) => {
  return (
    <div className='border-solid border-2 border-sky-500'>
        <h1 className='text-center text-2xl'>{props.header}</h1>
        <div className='flex'>  
            <div className='book'>
                <img src={props.img1} alt="img1"></img>
            </div>
            <div className='book'>
                <img src={props.img2} alt="img2"></img>
            </div>
        </div>
    </div>
  )
}

export default Section