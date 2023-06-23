import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function NightTuesday(){

    const [noiteTerca,setNoiteTerca] = useState([])

    useEffect(() => {
        async function lerNoiteTerca(){
            const response = await api.get('/terca/periododia?periodoDia=noite')
            const data = response.data

            setNoiteTerca(data)
        }

        lerNoiteTerca()

        var data = new Date()
        let hora = data.getHours()
        let noite = document.getElementById('noite')
  
        if(hora >= 18 && hora <= 23){
            noite.style.background = '#6ef02e'
            noite.style.border = '1px solid #000'
            
        }else{
            noite.style.background = 'tranparent'
            noite.style.border = '1px solid #fff'

        }

    },[])

    return(
        <ul className='nightList' id='noite'>
            {noiteTerca.map(noite => (
                <li key={noite._id}>
                    <DayTodayWeek
                        id={noite._id}
                        diaSemana='terca'
                        tipoTarefa={noite.tipoTarefa}
                        nomeTarefa={noite.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}