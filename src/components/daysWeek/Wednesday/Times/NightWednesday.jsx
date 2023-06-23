import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function NightWednesday(){

    const [noiteQuarta,setNoiteQuarta] = useState([])

    useEffect(() => {
        async function lerNoiteQuarta(){
            const response = await api.get('/quarta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteQuarta(data)
        }

        lerNoiteQuarta()

    },[])

    return(
        <ul className='nightList'>
            {noiteQuarta.map(noite => (
                <li key={noite._id}>
                    <DayTodayWeek
                        id={noite._id}
                        diaSemana='quarta'
                        tipoTarefa={noite.tipoTarefa}
                        nomeTarefa={noite.nomeTarefa}
                        concluido={noite.concluido}
                    />
                </li>
            ))}
        </ul>
    )
}