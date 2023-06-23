import api from "../../../../services/api"
import { useEffect,useState } from "react"
import DayTodayWeek from "../.."

export default function AllTimesFriday(){

    const [manhaSexta,setManhaSexta] = useState([])
    const [tardeSexta,setTardeSexta] = useState([])
    const [noiteSexta,setNoiteSexta] = useState([])
    const [periodoAgora,setPeriodoAgora] = useState('')

    useEffect(() => {
        async function lerManhaSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaSexta(data)
        }

        async function lerTardeSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeSexta(data)
        }

        async function lerNoiteSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteSexta(data)
        }

        lerManhaSexta()
        lerTardeSexta()
        lerNoiteSexta()

        
    },[])
    useEffect(() => { 
        async function lerPeriodoAgora(){
            var data = new Date()

            let hora = data.getHours()
            var periodoAgora = ''

            if(hora >= 0 && hora <= 5){
                periodoAgora = 'Madrugada'
                
            }else if(hora >= 6 && hora <= 11){
                periodoAgora = 'Manhã'
                
            }else if(hora >= 12 && hora <= 17){
                periodoAgora = 'Tarde'

            }else if(hora >= 18 && hora <= 23){
                periodoAgora = 'Noite'

            }

            setPeriodoAgora(periodoAgora)

        }

        let manha = document.getElementById('manha')
        let tarde = document.getElementById('tarde')
        let noite = document.getElementById('noite')
        
        if(periodoAgora == 'Manhã'){
            manha.style.background = '#6ef02e'
            manha.style.border = '1px solid #000'
            
            tarde.style.background = 'transparent'
            noite.style.background = 'transparent'
            
        }else if(periodoAgora == 'Tarde'){
            tarde.style.background = '#6ef02e'
            tarde.style.border = '1px solid #000'
            
            manha.style.background = 'trasparent'
            noite.style.background = 'transparent'
            
        }else if(periodoAgora == 'Noite'){
            noite.style.background = '#6ef02e'
            noite.style.border = '1px solid #fff'
            
            manha.style.background = 'trasparent'
            tarde.style.background = 'transparent'
            
        }else{
            manha.style.background = 'transparent'
            tarde.style.background = 'transparent'
            noite.style.background = 'transparent'
        
        }

        lerPeriodoAgora()
    
    },[periodoAgora])

    return(
        <div className="allTimes">

            <div className="timesWraper">
                <ul className="manha" id='manha'>
                    <h2>Manhã</h2>
                    {manhaSexta.map(manha => (
                        <li key={manha._id}>
                            <DayTodayWeek
                                id={manha._id}
                                diaSemana='sexta'
                                tipoTarefa={manha.tipoTarefa}
                                nomeTarefa={manha.nomeTarefa}
                                concluido={manha.concluido}
                            />
                        </li>
                    ))}
                </ul>

                <ul className="tarde" id='tarde'>
                    <h2>Tarde</h2>
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
                
                <ul className="noite" id='noite'>
                    <h2>Noite</h2>
                    {noiteSexta.map(noite => (
                        <li key={noite._id}>
                            <DayTodayWeek
                                id={noite._id}
                                diaSemana='sexta'
                                tipoTarefa={noite.tipoTarefa}
                                nomeTarefa={noite.nomeTarefa}
                                concluido={noite.concluido}
                            />
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}