import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function NightThursday(){

    const [noiteQuinta,setNoiteQuinta] = useState([])

    useEffect(() => {
        async function lerNoiteQuinta(){
            const response = await api.get('/quinta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteQuinta(data)
        }

        lerNoiteQuinta()

    },[])

    return(
        <ul className='morningList'>
            {noiteQuinta.map(noite => (
                <li key={noite._id}>
                    <DayTodayWeek
                        id={noite._id}
                        diaSemana='quinta'
                        tipoTarefa={noite.tipoTarefa}
                        nomeTarefa={noite.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}