import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function AftenoonFriday(){

    const [tardeSexta,setTardeSexta] = useState([])

    useEffect(() => {
        async function lerTardeSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeSexta(data)
        }

        lerTardeSexta()

    },[])

    return(
        <ul className='afternoonList'>
            {tardeSexta.map(tarde => (
                <li key={tarde._id}>
                    <DayTodayWeek
                        id={tarde._id}
                        diaSemana='sexta'
                        tipoTarefa={tarde.tipoTarefa}
                        nomeTarefa={tarde.nomeTarefa}
                        concluido={tarde.concluido}
                    />
                </li>
            ))}
        </ul>
    )
}