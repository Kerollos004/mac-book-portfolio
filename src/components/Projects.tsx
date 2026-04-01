import { useMinmizeContext, useNavContext, useProjectsContext } from "../contexts";
import HeadFolder from '../components/HeadFolder'
import { projects, mainClass } from "../assets/assets";
import folderImg from "../../public/imgs/icons8-mac-folder-48.png"
import { useState } from "react";
import { motion } from "motion/react";
export default function Projects() {
    const { project, setProject } = useProjectsContext()

    const [selectedProject, setSelectedProject] = useState<number>(0)
    const { nav } = useNavContext()
    const {mini} = useMinmizeContext()

    const handleSelection = (index:number) => {
        setSelectedProject(index)
    }
    
    const projectMap = projects.map((project, i) => {
        return (
            <div onClick={() => {
                setProject(true)
                handleSelection(i)
            }} className=" p-3 rounded-2xl hover:bg-blue-50  flex items-center gap-2" key={i}>
                <img  className="w-7 h-7" src={folderImg} alt="img" loading="lazy" />
                <h3>{project.name }</h3>
            </div>
        )
    })
    return (
        <motion.main
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            dragElastic={.4}
            className={`${mainClass} ${mini?"w-full h-full md:w-full md:h-full":""} ${nav == "projects" ? "block" : "hidden"}`}
        >
            <HeadFolder />
            <div className="h-[calc(100%-50px)] w-full p-3 absolute top-10 overflow-y-scroll">
                <h3 className="text-3xl capitalize mb-2.5"> projects </h3>
                {projectMap}
            </div>
            {/* layer */}
            <div className={ `absolute to-0 left-0 bg-white z-10 w-full h-full ${project ? "block":"hidden"}`}>
                <HeadFolder />
                <div className="p-3 overflow-y-scroll h-[calc(100%-50px)] w-full absolute top-10">
                    <img  src={projects[selectedProject].img } className="mb-3 w-full h-96" alt="img" loading="lazy" />
                    <h3 className="mb-2 text-3xl">{projects[selectedProject].name}</h3>
                    <p>{projects[selectedProject].desc}</p>
                    <div className="my-2">
                        <h3 className="mb-2 text-2xl capitalize">tech stack :</h3>
                        <div className="flex items-center gap-2"> 
                            {projects[selectedProject].techs.map((img , i) => {
                                return (
                                    <img className="w-10 h-10 rounded-full" src={img} key={i} alt="img" />
                                )
                            })}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mt-2">
                        <a className="flex items-center p-3 rounded-2xl gap-1.5 hover:bg-blue-50" href={projects[selectedProject].repo}> <img src={folderImg} alt="img" /> github </a> 
                        <a className="flex items-center p-3 rounded-2xl gap-1.5 hover:bg-blue-50" href={projects[selectedProject].demo}> <img src={folderImg} alt="img" /> vercel  </a>
                    </div>
                </div>
            </div>
        </motion.main>
    )
}
