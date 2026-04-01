import { helloText } from "../assets/assets"
import { motion, type Variants } from "motion/react"
const wordVariants: Variants = {
        hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            staggerChildren: 0.3,
            delayChildren:.1
        },
    },
}
const letterVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
    },
}
export default function Text() {
    const helloTextMap = helloText.h1.map(( text ) => {
        return (
            <motion.h1 variants={letterVariant} className="text-6xl italic  font-font-bold hover:-translate-y-1 " key={text.id}>{text.text}</motion.h1>
        )
    })
    return (
        <div  className=" text-white w-11/12 md:w-lg absolute top-1/2 left-1/2 transform  cursor-default text-center -translate-y-1/2 -translate-x-1/2">
            <motion.p
                initial={{ opacity: 0, y: -20 }} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:"circInOut"}}
                className="text-2xl mb-2">{helloText.p}
            </motion.p>
            <motion.div
                initial="hidden" 
                animate="show"
                variants={wordVariants} className="flex items-center justify-center gap-0.5 "
            >{helloTextMap}
            </motion.div>
        </div>
    )
}
