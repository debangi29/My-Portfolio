import React from "react";
import { motion } from "framer-motion";

const achievements = [
    {
        type: "Winner of the Woodpecker’s Hackathon among 12K+ participants",
        time: "2024",
        place: "Woodpecker Analytics and Services",
    },
    {
        type: "Winner at Round 3 (Final) of the national Crystal Ball event, showcasing expertise in Natural Language Processing",
        time: "2024",
        place: "Blue Yonder",
    },
    {
        type: "First runner-up at Oper-heimer competition at Optima, IIT Kharagpur, demonstrating expertise in optimization",
        time: "2023",
        place: "IIT Kharagpur",
    },
    {
        type: "First runner-up at Asteroid Venture competition at NSSC, IIT Kharagpur, demonstrating expertise in Astronomy and Business skills",
        time: "2023",
        place: "IIT Kharagpur",
    },
    {
        type: "Secured AIR 5008 in JEE Mains and AIR 4136 in JEE Advanced Examination among over 1M candidates.",
        time: "2022",
        place: "JEE",
    },
];

const Achievements = () => {
    return (
        <div className="my-16 px-6 max-w-7xl mx-auto">
            <h2 className=' font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>Achievements</h2>


            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 
              flex flex-col items-start overflow-hidden break-words w-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-bold text-lg w-full break-words">
                            {achievement.type}
                        </h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            {achievement.time} | {achievement.place}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
