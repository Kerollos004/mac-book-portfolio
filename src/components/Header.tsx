/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import { motion } from "motion/react";

export default function Header() {
    const [day, setDay] = useState<number>(0)
    const [month, setMonth] = useState<number>(0)
    const [year, setYear] = useState<number>(0)
    const getTime = () => {
        const date = new Date()
        setDay(date.getDate())
        setMonth(date.getMonth())
        setYear(date.getFullYear())
    }
    useEffect(() => {
        getTime()
    }, [])




    return (
        <motion.header
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "circInOut" }}
            className='flex justify-between items-center bg-white/20 w-full px-5 p-3 text-white fixed top-0 left-0 '
        >
        <h3 className="text-2xl text-white capitalize"> web developer </h3>
        <div className="flex gap-1.5 text-2xl items-center">
            <h3>{day<10?`0${day}`:day} </h3>
            <h3>/</h3>
            <h3> {month + 1} </h3>
            <h3>/</h3>
            <h3> {year} </h3>
        </div>
    </motion.header>
)
}
