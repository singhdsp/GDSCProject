import React from 'react'

export default function Dialog(props) {
    return (
        <div className='h-full w-full z-50 fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
            <div className='p-8 rounded-md min-w-[24rem] flex items-center justify-center bg-white'>
                {props.children}
            </div>
        </div>
    )
}
