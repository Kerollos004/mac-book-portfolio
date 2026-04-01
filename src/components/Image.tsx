import { useNavContext } from "../contexts"
import imgSrc from "../assets/kero.jpeg"
import { motion } from "motion/react" 
export default function Img() {
  const {setNav} = useNavContext()
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={.4}
      onClick={() => setNav("about")}
      className=" absolute top-28  md:top-56 md:left-1/5 left-8 p-3 flex text-white flex-col items-center justify-center gap-2 hover:bg-white/10"
    >
      <img src={imgSrc} loading="lazy" className="w-30 h-30" alt="img" />
      <h3>kerollos melad</h3>
    </motion.div>
  )
}
