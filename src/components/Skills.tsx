import { mainClass , frontSkills , backSkills , tools } from "../assets/assets";
import folderImg from "../../public/imgs/icons8-mac-folder-48.png"
import HeadFolder from '../components/HeadFolder'
import { useNavContext , useFilesContext, useMinmizeContext } from "../contexts";

export default function Skills() {
    const { nav } = useNavContext()
    const { setFile , file } = useFilesContext()
    const{mini} = useMinmizeContext()

    const forntMap = frontSkills.map((skill, i) => {
        return (
            <div className="hover:bg-blue-50   flex-col flex items-center justify-center   text-center  p-3" key={i}>
                <img className="w-20 h-20 " src={skill.img} alt="img" loading="lazy" />
                <h3>{ skill.name}</h3>
            </div>
        )
    })

    const backtMap = backSkills.map((skill, i) => {
        return (
            <div className="hover:bg-blue-50   flex-col flex items-center justify-center  text-center  p-3" key={i}>
                <img className="w-20 h-20 " src={skill.img} alt="img" loading="lazy" />
                <h3>{ skill.name}</h3>
            </div>
        )
    })

    const toolsMap = tools.map((skill, i) => {
        return (
            <div className="hover:bg-blue-50   flex-col flex items-center   justify-center text-center p-3" key={i}>
                <img className="w-20 h-20 " src={skill.img} alt="img" loading="lazy" />
                <h3>{ skill.name}</h3>
            </div>
        )
    })
    return (
        <main

            className={`${mainClass} ${mini?"w-full h-full md:w-full md:h-full":""} ${nav === "skills" ? "block" : "hidden"}`}
            >
            <HeadFolder />
            <div className=' h-[calc(100%-50px)] w-full p-3 absolute top-10 '>
                <div onDoubleClick={()=>{setFile("front")}} className="flex mb-2 items-center p-3 rounded-2xl hover:bg-blue-50 gap-2">
                    <img  className="w-6 h-6" src={folderImg} alt="img" loading="lazy" />
                    <h3 className="text-xl capitalize">frontend</h3>
                </div>
                <div onDoubleClick={()=>{setFile("back")}} className="flex mb-2 items-center p-3 rounded-2xl hover:bg-blue-50 gap-2">
                    <img className="w-6 h-6" src={folderImg} alt="img" loading="lazy" />
                    <h3 className="text-xl capitalize">backend</h3>
                </div>
                <div onDoubleClick={()=>{setFile("tools")}} className="flex mb-2 items-center p-3 rounded-2xl hover:bg-blue-50 gap-2">
                    <img className="w-6 h-6" src={folderImg} alt="img" loading="lazy" />
                    <h3 className="text-xl capitalize">tools</h3>
                </div>
            </div>
            {/* layer */}
            <div className={` bg-white absolute top-0 left-0 z-10 w-full h-full ${file!==""?"block":"hidden"} `}>
                <HeadFolder />
                <div className=' h-[calc(100%-50px)] w-full p-3 absolute top-10 grid grid-cols-1 md:grid-cols-3  gap-2.5 overflow-y-scroll '>
                    { file==="front" &&
                        forntMap
                    }
                    { file==="back" &&
                        backtMap
                    }
                    { file==="tools" &&
                        toolsMap
                    }
                </div>
            </div>
        </main>
        
    )
}