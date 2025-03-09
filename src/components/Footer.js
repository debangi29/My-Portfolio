import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
const Footer = ({ children, className = "" }) => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>
                    {new Date().getFullYear()} &copy; All rights Reserved.
                </span>
                <div className='flex items-center'>
                    Build With <span className='text-primary text-2xl px-1'>&#9825;</span> <Link href="/">By Debangi</Link>
                </div>
                <Link href="mailto:debangighosh1705@gmail.com">Say Hello</Link>
            </Layout>
        </footer>
    )
}
export default Footer

