import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
// import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import profilePic1 from '../../public/images/profile/photo.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Transition from '@/components/Transition'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Debangi | About Page</title>
                <meta name='description' content='any description'></meta>
            </Head>
            <Transition></Transition>
            <main className=' flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className=' pt-16'>
                    <AnimatedText text='Taking steps, making strides! ' className=' mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className=' grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className=' col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className=' mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className=' font-medium'>I'm passionate about software development, problem-solving, and emerging technologies, with experience in frontend and backend development. I love building interactive web applications using modern frameworks and developing scalable systems.</p>
                            <p className=' font-medium my-4'>I enjoy working with React.js, Next.js, and Tailwind CSS to craft seamless user experiences, while also exploring backend development, APIs, and cloud computing to build robust applications. I'm actively learning blockchain and Bitcoin technologies, diving deeper into decentralized systems and their real-world applications. My strong foundation in competitive programming helps me approach challenges analytically and optimize solutions effectively.</p>
                        </div>
                        <div className=' col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8'>
                            <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light xl:col-span-4' />
                            <Image priority src={profilePic1} alt='image' className=' w-full h-auto rounded-2xl' sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'></Image>
                        </div>
                        <div className=' col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className=' flex flex-col items-end justify-center xl:items-center'>
                                <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={10} />+</span>
                                <h2 className=' text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className=' flex flex-col items-end justify-center xl:items-center'>
                                <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={1459} /></span>
                                <h2 className=' text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Specialist @ Codeforces</h2>
                            </div>
                        </div>
                    </div>
                    <Skills></Skills>
                    <Experience></Experience>
                    <Education></Education>
                    <Achievements></Achievements>
                </Layout>
            </main>
        </>
    )
}

export default about