import { useState } from "react"
import { genNum ,sum} from "./Helper";
import "./Loterry.css"
export default function Loterry(){
    let [ticket,setTicket] = useState(genNum(3));
    let isWinning=sum(ticket)=== 15;

    let BuyTicket=()=>{
        setTicket(genNum(3));
    }
    return(
        <div>
        <h1>Lottery Game!</h1>
        <div className="Loterry">
        
   <span>{ticket[0]}</span>
   <span>{ticket[1]}</span>
   <span>{ticket[2]}</span>
  
        </div>
        <button onClick={BuyTicket}>Generate Ticket</button>
        <br></br>
        <h3>{isWinning && "Congracts You Won"}</h3>
        </div>
    )
}