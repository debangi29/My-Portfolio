import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
    return (
        <div className='absolute flex md:hidden left-4 bottom-4
        items-center justify-center overflow-hidden'>
            <div className='w-48 h-auto flex items-center justify-center relative' >
                <CircularText className={"fill-dark dark:fill-light animate-spin-slow"} />
                <Link href="/" className='flex items-center justify-center
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
                text-light shadow-md border-solid border-dark w-20 h-20 rounded-full
                font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:border-light
                    hover:dark:bg-dark hover:dark:text-light hover:dark:border-dark
                '>I’m a</Link>
            </div>
        </div>
    )
}
export default HireMe



/* <div className='absolute left-4 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-48 h-auto flex items-center justify-center relative'>
                {/* Add dark mode support here */
        //         <CircularText className="fill-dark dark:fill-light animate-spin-slow" />

        //         <Link href="/"
        //             className='flex items-center justify-center
        //             absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        //             bg-dark text-light shadow-md border border-solid border-dark 
        //             w-20 h-20 rounded-full font-semibold 
        //             hover:bg-light hover:text-dark 
        //             dark:bg-light dark:text-dark dark:border-light
        //             hover:dark:bg-dark hover:dark:text-light hover:dark:border-dark'>
        //             I'm a
        //         </Link>
        //     </div>
        // </div> */}