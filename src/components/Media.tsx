import { mainClass, medias } from "../assets/assets"
import { motion } from "motion/react"
import HeadFolder from "./HeadFolder"
import folderImg from "../../public/imgs/icons8-mac-folder-48.png"
import { useMinmizeContext, useNavContext } from "../contexts"
export default function Media() {
    const { nav, setNav } = useNavContext()
    const {mini} = useMinmizeContext()
    const mediaMap = medias.map((media) => {
        return (
            <a href={media.ref} key={media.id} className="flex items-center w-full hover:bg-blue-50 gap-2">
                <img src={folderImg} alt="img" loading="lazy" />
                <h3>{media.text} </h3>
            </a>
        )
    })
    return (
        <>
            {/* desktop folder */}
            <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={.4}
                onClick={() => { setNav("media") }}
                className={`flex flex-col justify-center items-center  text-white p-3 hover:bg-white/10 absolute top-1/5 right-1/5  `}
            >
                <img className=" mb-2" src={folderImg} alt="img" loading="lazy" />
                <h3> social links </h3>
            </motion.div>
            {/* main folder */}
            <motion.main
                drag
                dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                dragElastic={.4}
                className={`${mainClass} ${mini?"w-full h-full md:w-full md:h-full":""} ${nav == "media" ? "block" : "hidden"} `}
            >
                <HeadFolder />
                <div className=" h-[calc(100%-50px)] w-full p-3 absolute top-10  ">
                    {mediaMap}
                </div>
            </motion.main>
        </>
    )
}
