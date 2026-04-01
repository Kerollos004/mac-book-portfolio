import { useNavContext, useFilesContext, useProjectsContext, useMinmizeContext } from "../contexts";

export default function HeadFolder() {
  const { setNav } = useNavContext()
  const { setFile } = useFilesContext()
  const { setProject } = useProjectsContext()
  const {mini , setMini} = useMinmizeContext()
  return (
    <div className="  fixed top-0 left-0 w-full z-10 flex gap-2 justify-end py-1.5 px-3 bg-gray-100 ">
      <div onClick={() => {
        setFile("")
        setProject(false)
      }} className=" w-5 h-5 rounded-full bg-green-700 cursor-pointer"></div>
      <div onClick={() => {
        setMini(!mini)
        }} className=" w-5 h-5 rounded-full bg-yellow-400 cursor-pointer"></div>
      <div onClick={() => {
        setNav("")
        setFile("")
      }} className="w-5 h-5 rounded-full bg-red-700 cursor-pointer"></div>
    </div>
  )
}
