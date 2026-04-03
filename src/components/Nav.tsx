import { Person ,  Code , Cast  , Chat   } from "react-bootstrap-icons"
import { motion, type Variants } from "motion/react";
import { useNavContext } from "../contexts";

const navVariants:Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            staggerChildren: 0.3,
            
        },
    },
};

const itemVariants:Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export default function Nav() {
    const { setNav } = useNavContext()
    

    return (
        <motion.div variants={navVariants}
            initial="hidden" animate="show" 
            className="absolute left-1/2 -translate-x-1/2 bottom-10 text-2xl cursor-pointer p-5 rounded-4xl bg-white/20 flex gap-3 text-white"
        >
            <motion.div variants={itemVariants}
                whileHover={{ transform: "translateY(-10px)" ,  backgroundColor: "oklch(80.9% 0.105 251.813)" }}   
                whileTap={{   transform: "translateY(-10px)" ,  backgroundColor: "oklch(80.9% 0.105 251.813)" }}
                className="p-3 border border-white rounded-2xl "
            >
                <Person onDoubleClick={()=>{setNav("about")}}/>
            </motion.div>

            <motion.div variants={itemVariants}                 
                whileHover={{ transform: "translateY(-10px)" ,  backgroundColor: "oklch(80.9% 0.105 251.813)" }}   
                whileTap={{   transform: "translateY(-10px)" ,  backgroundColor: "oklch(80.9% 0.105 251.813)" }}
                className="p-3 border border-white rounded-2xl  " >
                <Code onDoubleClick={()=>{setNav("skills")}}/>
            </motion.div>

            <motion.div variants={itemVariants}                 
                whileHover={{ transform: "translateY(-10px)" ,  backgroundColor: "oklch(80.9% 0.105 251.813)" }}   
                whileTap={{   transform: "translateY(-10px)" ,  backgroundColor: "oklch(80.9% 0.105 251.813)" }}
                className="p-3 border border-white rounded-2xl  " >
                <Cast onDoubleClick={()=>{setNav("projects")}}/>
            </motion.div>

            <motion.div variants={itemVariants}                 
                whileHover={{ transform: "translateY(-10px)" ,  backgroundColor: "oklch(80.9% 0.105 251.813)" }}   
                whileTap={{   transform: "translateY(-10px)" ,  backgroundColor: "oklch(80.9% 0.105 251.813)" }}
                className="p-3 border border-white rounded-2xl  " >
                <Chat onDoubleClick={()=>{setNav("contact")}}/>
            </motion.div>
        </motion.div>
    )
}
