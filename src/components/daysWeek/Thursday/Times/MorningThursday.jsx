import '../../../../Styles/Times.css'
import DayTodayWeek from "../.."
import api from "../../../../services/api"
import { useEffect,useState } from "react"

export default function MorningThursday(){

    const [manhaQuinta,setManhaQuinta] = useState([])

    useEffect(() => {
        async function lerManhaQuinta(){
            const response = await api.get('/quinta/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaQuinta(data)
        }

        lerManhaQuinta()

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
            <h2 style={{
                textAlign:'center',
                fontSize:'2.5em',
                margin:'1rem 0 2rem 0'
            }}>
                Manhã
            </h2>
            {manhaQuinta.map(manha => (
                <li key={manha._id}>
                    <DayTodayWeek
                        id={manha._id}
                        diaSemana='quinta'
                        tipoTarefa={manha.tipoTarefa}
                        nomeTarefa={manha.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}