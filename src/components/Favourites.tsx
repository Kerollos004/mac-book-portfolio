import HeadFolder from "./HeadFolder"
import { mainClass , favourites } from "../assets/assets"
import { useMinmizeContext, useNavContext } from "../contexts"
import folderImg from "../../public/imgs/icons8-mac-folder-48.png"
import { motion } from "motion/react"
export default function Favourites() {
    const { nav, setNav } = useNavContext()
    const{mini}=useMinmizeContext()
    const favouritesMap = favourites.map((fav, i) => {
        return (
            <motion.div
                whileTap={{backgroundColor:"#eff6ff"}}
                whileHover={{backgroundColor:"#eff6ff"}}
                className=" flex p-3 flex-col justify-center items-center gap-2  "
                key={i}
            >
                <img className="w-11/12 h-96" src={fav.img} alt="img" />
                <h3> {fav.name} </h3>
            </motion.div>
        )
    })
    return (
    <>
        {/* desktop folder */}
            <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={.4}
                onDoubleClick={() => { setNav("favourite") }}
                whileHover={{   backgroundColor: "rgba(255,255,255,.1)" }}   
                whileTap={{     backgroundColor: "rgba(255,255,255,.1)" }}
                className=" flex flex-col justify-center items-center  p-3  absolute top-2/5 right-1/5  "
            >
                <img src={folderImg} alt="img" loading="lazy" className="mb-2" />
                <h3 className="text-center text-white"> my favourites </h3>
        </motion.div>
        

        {/* main folder */}
            <main className={`${mainClass} ${mini?"w-full h-full md:w-full md:h-full":""} ${nav == "favourite" ? "block" : "hidden"}`}

            >
            <HeadFolder />
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 absolute top-10 h-[calc(100%-50px)] w-full overflow-y-scroll p-3 ">
                {favouritesMap}
            </div>
        </main>
    </>
    )
}
