import api from "../../../../services/api"
import { useEffect,useState } from "react"
import DayTodayWeek from "../.."

export default function NightFriday(){

    const [noiteSexta,setNoiteSexta] = useState([])

    useEffect(() => {
        async function lerNoiteSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteSexta(data)
        }

        lerNoiteSexta()

    },[])

    return(
        <ul className='nightList'>
            {noiteSexta.map(noite => (
                <li key={noite._id}>
                    <DayTodayWeek
                        id={noite._id}
                        diaSemana='sexta'
                        tipoTarefa={noite.tipoTarefa}
                        nomeTarefa={noite.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}