import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function MorningWednesday(){

    const [manhaQuarta,setManhaQuarta] = useState([])

    useEffect(() => {
        async function lerManhaQuarta(){
            const response = await api.get('/quarta/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaQuarta(data)
        }

        lerManhaQuarta()

        var data = new Date()
        let hora = data.getHours()
        let manha = document.getElementById('manha')
  
        if(hora >= 6 && hora <= 11){
            manha.style.background = '#6ef02e'
            manha.style.border = '1px solid #000'
            
        }else{
            manha.style.background = 'tranparent'
            manha.style.border = '1px solid #cccc'

        }

    },[])

    return(
        <ul className='morningList' id='manha'>
            {manhaQuarta.map(manha => (
                <li key={manha._id}>
                    <DayTodayWeek
                        id={manha._id}
                        diaSemana='quarta'
                        tipoTarefa={manha.tipoTarefa}
                        nomeTarefa={manha.nomeTarefa}
                        concluido={manha.concluido}
                    />
                </li>
            ))}
        </ul>
    )
}