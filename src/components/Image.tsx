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
      onDoubleClick={() => setNav("about")}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}   // للديسكتوب
      whileTap={{  backgroundColor: "rgba(255,255,255,0.15)" }} // للموبايل (مهم جداً)
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className=" absolute top-28  md:top-56 md:left-1/5 left-8 p-3 flex text-white flex-col items-center justify-center gap-2 "
    >
      <img src={imgSrc} loading="lazy" className="w-30 h-30" alt="img" />
      <h3>kerollos melad</h3>
    </motion.div>
  )
}
