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
            {noiteSegunda.map(noite => (
                <li key={noite._id}>
                    <DayTodayWeek
                        id={noite._id}
                        diaSemana='segunda'
                        tipoTarefa={noite.tipoTarefa}
                        nomeTarefa={noite.nomeTarefa}
                        concluido={noite.concluido}
                    />
                </li>
            ))}
        </ul>
    )
}