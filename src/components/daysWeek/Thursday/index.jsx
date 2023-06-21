import '../../../Styles/DaysWeek.css'
import '../../../Styles/Annotations.css'
import '../../../Styles/Tasks.css'
import '../../../Styles/Times.css'
import { GrAddCircle } from 'react-icons/gr'
import { useState } from "react"
import { Link } from 'react-router-dom'
import AllTimesThursday from './Times/AllTimesThursday.jsx'
import MorningThursday from "./Times/MorningThursday.jsx"
import AftenoonThursday from "./Times/AfternoonThursday.jsx"
import NightThursday from "./Times/NightThursday.jsx"

export default function Thursday(){

    const filtragemPeriodo = [
        'dia todo',
        'manha',
        'tarde',
        'noite'
    ]

    const [valorDia,setValorDia] = useState('')

    return(
        <section className="dayContainer">

            <div className="optionsContainer">
                <div className='filterContainer'>
                    <select onChange={valor => setValorDia(valor.target.value)}>
                        {filtragemPeriodo.map(filtros => (
                            <option key={filtros}>
                                {filtros}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='addTaskButton'>
                    <Link to='/quinta/adicionar'>
                        <button>
                            <button>Adicionar tarefa</button>
                        </button>
                    </Link>
                </div>
            </div>
            
            <div className='periodsContainer'>
                {valorDia == 'manha' ? <MorningThursday/> :
                valorDia == 'tarde' ? <AftenoonThursday/> :
                valorDia == 'noite' ? <NightThursday/> :
                valorDia == 'dia todo' || valorDia == '' ? 
                <AllTimesThursday/> : ''} 
            </div>
 
        </section>
    )
}