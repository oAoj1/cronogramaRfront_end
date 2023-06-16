import api from "../../../../services/api"
import { useEffect,useState } from "react"
import DayTodayWeek from '../..'

export default function NightMonday(){

    const [noiteSegunda,setNoiteSegunda] = useState([])

    useEffect(() => {
        async function lerNoiteSegunda(){
            const response = await api.get('/segunda/periododia?periodoDia=noite')
            const data = response.data

            setNoiteSegunda(data)
        }

        lerNoiteSegunda()

    },[])

    return(
        <ul className='nightList'>
            {noiteSegunda.map(noite => (
                <li key={noite._id}>
                    <DayTodayWeek
                        id={noite._id}
                        diaSemana='segunda'
                        tipoTarefa={noite.tipoTarefa}
                        nomeTarefa={noite.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}