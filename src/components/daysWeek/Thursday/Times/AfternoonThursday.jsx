import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function AftenoonThursday(){

    const [tardeQuinta,setTardeQuinta] = useState([])

    useEffect(() => {
        async function lerTardeQuinta(){
            const response = await api.get('/quinta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeQuinta(data)
        }

        lerTardeQuinta()

    },[])

    return(
        <ul className='afternoonList'>
            {tardeQuinta.map(tarde => (
                <li key={tarde._id}>
                    <DayTodayWeek
                        id={tarde._id}
                        diaSemana='quinta'
                        tipoTarefa={tarde.tipoTarefa}
                        nomeTarefa={tarde.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}