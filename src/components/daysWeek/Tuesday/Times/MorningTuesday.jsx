import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from '../..'

export default function MorningTuesday(){

    const [manhaTerca,setManhaTerca] = useState([])

    useEffect(() => {
        async function lerManhaTerca(){
            const response = await api.get('/terca/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaTerca(data)
        }

        lerManhaTerca()

        var data = new Date()
        let hora = data.getHours()
        let manha = document.getElementById('manha')
  
        if(hora >= 6 && hora <= 11){
            manha.style.background = '#6ef02e'
            manha.style.border = '1px solid #000'
            
        }else{
            manha.style.background = 'tranparent'
            manha.style.border = '1px solid #cccc'

        }

    },[])

    return(
        <ul className='morningList' id='manha'>
            {manhaTerca.map(manha => (
                <li key={manha._id}>
                    <DayTodayWeek
                        id={manha._id}
                        diaSemana='terca'
                        tipoTarefa={manha.tipoTarefa}
                        nomeTarefa={manha.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}