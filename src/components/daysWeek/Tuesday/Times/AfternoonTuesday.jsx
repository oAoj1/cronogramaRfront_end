import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from '../..'

export default function AftenoonTuesday(){

    const [tardeTerca,setTardeTerca] = useState([])

    useEffect(() => {
        async function lerTardeTerca(){
            const response = await api.get('/terca/periododia?periodoDia=tarde')
            const data = response.data

            setTardeTerca(data)
        }

        lerTardeTerca()

        var data = new Date()
        let hora = data.getHours()
        let tarde = document.getElementById('tarde')
  
        if(hora >= 12 && hora <= 17){
            tarde.style.background = '#6ef02e'
            tarde.style.border = '1px solid #000'
            
        }else{
            tarde.style.background = 'tranparent'
            tarde.style.border = '1px solid #000'

        }

    },[])

    return(
        <ul className='afternoonList' id='tarde'>
            {tardeTerca.map(tarde => (
                <li key={tarde._id}>
                    <DayTodayWeek
                        id={tarde._id}
                        diaSemana='terca'
                        tipoTarefa={tarde.tipoTarefa}
                        nomeTarefa={tarde.nomeTarefa}
                        concluido={tarde.concluido}
                    />
                </li>
            ))}
        </ul>
    )
}