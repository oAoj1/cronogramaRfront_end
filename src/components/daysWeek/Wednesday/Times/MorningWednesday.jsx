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

    },[])

    return(
        <ul className='morningList'>
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