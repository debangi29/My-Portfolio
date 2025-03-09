import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';

const Details = ({ type, time, place }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className='bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl flex flex-col items-center text-center w-[80%] mx-auto sm:w-full'
        >
            <h3 className='capitalize font-bold text-xl sm:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 text-sm mt-2'>{time} | {place}</span>
        </motion.div>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    });

    return (
        <div className='my-32 px-6'>
            <h2 className='font-bold text-6xl mb-16 text-center md:text-5xl sm:text-4xl'>Achievements</h2>
            <motion.div
                ref={ref}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-[80%] mx-auto md:w-[90%]'
            >
                <Details type='Winner of the Woodpecker’s Hackathon among 12K+ participants' time='2024' place='Woodpecker Analytics and Services' />
                <Details type='Winner at Round 3 (Final) of the national Crystal Ball event, showcasing expertise in NLP' time='2024' place='Blue Yonder' />
                <Details type='First runner-up at Oper-heimer competition at Optima, IIT Kharagpur, demonstrating expertise in optimization' time='2023' place='IIT Kharagpur' />
                <Details type='First runner-up at Asteroid Venture competition at NSSC, IIT Kharagpur, demonstrating expertise in Astronomy and Business skills' time='2023' place='IIT Kharagpur' />
                <Details type='Secured AIR 5008 in JEE Mains and AIR 4136 in JEE Advanced Examination among over 1M candidates.' time='2022' place='JEE' />
            </motion.div>
        </div>
    );
};

export default Education;
