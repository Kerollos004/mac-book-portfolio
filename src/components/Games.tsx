import folderImg from "../../public/imgs/icons8-mac-folder-48.png"
import { useFilesContext, useMinmizeContext, useNavContext } from "../contexts"
import HeadFolder from "./HeadFolder"
import { mainClass } from "../assets/assets"
import RockPaper from "./RockPaper"
// import TicTac from "./TicTac"
import { motion } from "motion/react"
export default function Games() {
    const { nav , setNav } = useNavContext()
    const { file, setFile } = useFilesContext()
    const {mini} = useMinmizeContext()
    return (
        <>
            {/* desktop folder */}
            <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={.4}
                onClick={() => { setNav("games") }}
                className=" flex flex-col justify-center items-center  p-3 hover:bg-white/10 absolute top-3/5 left-1/5  "
            >
                    <img src={folderImg} alt="img" loading="lazy" className="mb-2" />
                    <h3 className="text-center text-white"> games & entertainment </h3>
            </motion.div>
            {/* main folder */}
            <motion.main
                drag
                dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                dragElastic={.4}
                className={`${mainClass} ${mini?"w-full h-full md:w-full md:h-full":""} ${nav == "games" ? "block" : "hidden"} `}
            >
                <HeadFolder />
                <div  className=" h-[calc(100%-50px)] w-full p-3 absolute top-10  ">
                    {/* <div onClick={()=>{setFile("tic tac")}} className="flex items-center w-full hover:bg-blue-50 gap-2">
                        <img src={folderImg} alt="img" loading="lazy" />
                        <h3>tic tac toe</h3>
                    </div> */}
    
                    <div onClick={()=>{setFile("rock paper")}} className="flex items-center w-full hover:bg-blue-50 gap-2">
                        <img src={folderImg} alt="img" loading="lazy" />
                        <h3>rock paper scissors </h3>
                    </div>

                </div>

                {/* layer folder */}
                <div className={` ${file!==""?"block":"hidden"}   bg-white absolute top-0 left-0 h-full w-full  `}>
                    <HeadFolder />
                    <div className="p-3 overflow-y-scroll h-[calc(100%-50px)] w-full absolute top-10">
                        {file == "rock paper" && 
                            <RockPaper/>
                        }
                    </div>
                </div>
            </motion.main>
        </>    
    )
}
