import { useEffect, useState } from "react"
import { images } from "../assets/assets"
export default function RockPaper() {
    const [personResult, setPersonResult] = useState<number>(0)
    const [comResult, setComResult] = useState<number>(0)
    const [personChoice, setPersonChoice] = useState<number|null>(null)
    const [compChoice, setCompChoice] = useState<number|null>(null)
    const [result , setResult] = useState<string>("let,s start")

    const handleSelction = (imgId:number) => {
        setPersonChoice(imgId)
        // eslint-disable-next-line react-hooks/purity
        const randomChoice = Math.floor(Math.random() * images.length)
        setCompChoice(randomChoice)
        
    }
    useEffect(() => {
        const displayResult = () => {
            //cases
            //drow case
            if (personChoice === null || compChoice === null) return
            if (personChoice == compChoice) {
                setResult(" it's a draw")
            }
            //person win
            else if(
            (personChoice === 0 && compChoice === 2) ||
            (personChoice === 1 && compChoice === 0) ||
            (personChoice === 2 && compChoice === 1)
            ){
                setResult("you win")
                setPersonResult((prev) => prev +1)
            } else {
                setResult("computer wins")
                setComResult((prev) => prev +1)
            }
        }
        displayResult()
    }, [personChoice, compChoice])
    
    const handleReset = () => {
        setPersonResult(0)
        setComResult(0)
        setResult("let's start again")
    }
    const imgMap = images.map((img) => {
        return (
            <div key={img.id} onClick={()=>{handleSelction(img.id)}} className=" h-40"><img className="w-full h-full" src={img.src} alt="img" loading='lazy' /></div>
        )
    })

    return (
        <div className="flex items-center justify-center flex-col w-full h-full">
            <div className=" grid grid-cols-3 gap-2 items-center">
                {imgMap}
            </div>
            <div className=" gap-2 items-center grid grid-cols-2 text-2xl text-center mt-3" >
                <h3 className="text-green-600"> you: {personResult} </h3>
                <h3 className="text-red-600"> computer: {comResult} </h3>
            </div>
            <div className={`gap-2 mt-4 flex items-center justify-center`}>
                <h3 className="text-2xl text-blue-500"> {result} </h3>
                <button onClick={handleReset} className={`  ${personChoice !== null && compChoice !== null?"block":"hidden"} py-1 px-4 rounded-2xl border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`}>reset</button>
            </div>
        </div>
    )
}
