import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from '../..'

export default function AftenoonMonday(){

    const [tardeSegunda,setTardeSegunda] = useState([])

    useEffect(() => {
        async function lerTardeSegunda(){
            const response = await api.get('/segunda/periododia?periodoDia=tarde')
            const data = response.data

            setTardeSegunda(data)
        }

        lerTardeSegunda()

    },[])

    return(
        <ul className='afternoonList'>
            {tardeSegunda.map(tarde => (
                <li key={tarde._id}>
                    <DayTodayWeek
                        id={tarde._id}
                        diaSemana='segunda'
                        tipoTarefa={tarde.tipoTarefa}
                        nomeTarefa={tarde.nomeTarefa}
                        concluido={tarde.concluido}
                    />
                </li>
            ))}
        </ul>
    )
}