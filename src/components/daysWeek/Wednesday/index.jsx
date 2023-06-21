import '../../../Styles/DaysWeek.css'
import '../../../Styles/Annotations.css'
import '../../../Styles/Tasks.css'
import '../../../Styles/Times.css'
import { useState } from "react"
import { Link } from 'react-router-dom'
import AllTimesWednesday from './Times/AllTimesWednesdays.jsx'
import MorningWednesday from "./Times/MorningWednesday.jsx"
import AftenoonWednesday from "./Times/AfternoonWednesday.jsx"
import NightWednesday from "./Times/NightWednesday.jsx"

export default function Wednesday(){

    const filtragemPeriodo = [
        'dia todo',
        'manha',
        'tarde',
        'noite'
    ]

    const [valorDia,setValorDia] = useState('')

    return(
        <section className="dayContainer">

            <div className='optionsContainer'>
                <div className="filterContainer">
                    <select onChange={valor => setValorDia(valor.target.value)}>
                        {filtragemPeriodo.map(filtros => (
                            <option key={filtros}>
                                {filtros}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='addTaskContainer'>
                    <Link to='/quarta/adicionar'>
                        <button>Adicionar tarefa</button>
                    </Link>
                </div>

            </div>
            
            <div className="periodsContainer">
                {valorDia == 'manha' ? <MorningWednesday/> :
                valorDia == 'tarde' ? <AftenoonWednesday/> :
                valorDia == 'noite' ? <NightWednesday/> :
                valorDia == 'dia todo' || valorDia == '' ? 
                <AllTimesWednesday/> : ''} 
            </div>
 
        </section>
    )
}