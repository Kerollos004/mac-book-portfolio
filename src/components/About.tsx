import { useFilesContext, useMinmizeContext, useNavContext } from '../contexts'
import HeadFolder from './HeadFolder'
import { about, services, mainClass } from '../assets/assets'
import folderImg from "../../public/imgs/icons8-mac-folder-48.png"
import cv from "../../public/imgs/cv.jpeg"
import { ArrowDownCircle } from 'react-bootstrap-icons'
import { motion } from 'motion/react'
export default function About() {
    const { nav } = useNavContext()
    const { file, setFile } = useFilesContext()
    const {mini} = useMinmizeContext()
    //about map 
    const aboutMapping = about.map((p) => {
        return (
            <p className="mb-2.5" key={p.id}>
                {p.p}
            </p>
        )
    })
    const servicesMapping = services.map((service) => {
        return (
            <div className="p-3 rounded-2xl w-full hover:bg-black/10 " key={service.id}>
                <div className="flex items-center mb-2 gap-2">
                    <img className='w-14 h-14 rounded-full' src={service.icon} alt="img" loading='lazy' />
                    <h3 className='text-2xl'> {service.name }</h3>
                </div>
                <p>{ service.desc}</p>
            </div>
        )
    })
return (
    <motion.main
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        dragElastic={.4}
        className={` ${mainClass} ${mini?"w-full h-full md:w-full md:h-full":""}  ${nav == "about" ? "block" : "hidden"}`}
    >
    <HeadFolder />
    <div className='overflow-y-scroll h-[calc(100%-50px)] w-full  absolute top-10 p-3 '>
        <div className=" mb-3 ">
            <h3 className='  mb-2.5 text-3xl capitalize'>about me</h3>
            {aboutMapping}  
                <div onClick={()=>{setFile("cv")}} className="flex mt-2 items-center gap-2 p-3 rounded-2xl hover:bg-blue-50">
                    <img src={folderImg} alt="img" className='w-6 h-6' />
                    <h3 className='text-2xl' >view cv</h3>
                </div>    
        </div>
        <div >
            <h3 className='  mb-2.5 text-3xl capitalize'>
                services
            </h3>
            {servicesMapping}  
        </div>  
        </div>   
        {/* layer */}
        <div className={` ${file=="cv"?"block":"hidden"} h-full w-full left-0 z-10 bg-white  absolute top-0 `}>
            <HeadFolder />
            <div className="h-[calc(100%-50px)] w-full  flex justify-center  p-3 absolute top-10">
                <img src={cv} alt="img" className=' w-full md:w-96 h-full' />
                <a href="../../public/my-cv.pdf" className=' absolute top-4 right-5 text-2xl' download> <ArrowDownCircle/> </a>
            </div>
        </div>
    </motion.main>

)
}
