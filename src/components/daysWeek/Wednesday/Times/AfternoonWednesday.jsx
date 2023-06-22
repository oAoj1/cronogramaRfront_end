import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from '../..'

export default function AftenoonWednesday(){

    const [tardeQuarta,setTardeQuarta] = useState([])

    useEffect(() => {
        async function lerTardeQuarta(){
            const response = await api.get('/quarta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeQuarta(data)
        }

        lerTardeQuarta()

    },[])

    return(
        <ul className='afternoonList'>
            {tardeQuarta.map(tarde => (
                <li key={tarde._id}>
                    <DayTodayWeek
                        id={tarde._id}
                        diaSemana='quarta'
                        tipoTarefa={tarde.tipoTarefa}
                        nomeTarefa={tarde.nomeTarefa}
                        concluido={tarde.concluido}
                    />
                </li>
            ))}
        </ul>
    )
}