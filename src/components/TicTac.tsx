// import {  useState } from "react"
// import {    type Square} from "../assets/assets"
// export default function TicTac() {
//     const [compResult , setCompResult] = useState<number>(0)
//     const [personResult, setPersonResult] = useState<number>(0)

//     const [turn, setTurn] = useState<"person" | "comp">("person")
//     const [squares, setSquares] = useState<Square[]>(
//         Array.from({ length: 9 }, (_, i) => ({
//     id: i,
//     text: ""
//     }))
//     )

    
// const handleClick = (box: Square) => {

//     // لو المربع متداس قبل كده
//     if (box.text !== "") return

//     const symbol = turn === "person" ? "x" : "o"

//     const updatedSquares = squares.map(item => {
//         if (item.id === box.id) {
//             return { ...item, text: symbol }
//         }
//         return item
//     })

//     setSquares(updatedSquares)

//     setTurn(prev => prev === "person" ? "comp" : "person")
// }




//     const handleReset = () => {
//         setCompResult(0)
//         setPersonResult(0)
//         setTurn("person")
//     }
//     const squaresMap = squares.map((square) => {
//         return (
//             <div onClick={()=>{handleClick(square)}} className="h-20  text-4xl rounded-2xl bg-blue-200 flex items-center justify-center p-3" key={square.id}>
//                 <h3> {square.text} </h3>
//             </div>
//         )
//     })
//     return (
//         <>
//             <div className="grid grid-cols-3 gap-2">
//                 {squaresMap}
//             </div>                      
//             <div className="gap-2 items-center grid grid-cols-2 text-2xl text-center mt-3">
//                 <h3 className="text-center text-2xl text-green-600">you:{personResult} </h3>
//                 <h3 className="text-center text-2xl text-red-600">computer:{ compResult}</h3>
//             </div>
//             <div className="text-center"><button onClick={handleReset} className="px-5 rounded-2xl hover:bg-blue-400 hover:text-white py-2 mt-4 border border-blue-400 text-blue-400  ">reset</button></div>
//         </>
//     )
// }
