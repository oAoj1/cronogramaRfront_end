import '../../../Styles/DaysWeek.css'
import '../../../Styles/Annotations.css'
import '../../../Styles/Tasks.css'
import '../../../Styles/Times.css'
import { useState } from "react"
import { GrAddCircle } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import AllTimesFriday from './Times/AllTimesFriday.jsx'
import MorningFriday from './Times/MorningFriday.jsx'
import AfternoonFriday from './Times/AfternoonFriday.jsx'
import NightFriday from './Times/NightFriday.jsx'

export default function Friday(){

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
                    <Link to='/sexta/adicionar'>
                        <button>Adicionar tarefa</button>
                    </Link>
                </div>

            </div>
            
            <div className='periodsContainer'>
                {valorDia == 'manha' ? <MorningFriday/> :
                valorDia == 'tarde' ? <AfternoonFriday/> :
                valorDia == 'noite' ? <NightFriday/> :
                valorDia == 'dia todo' || valorDia == '' ? 
                <AllTimesFriday/> : ''} 
            </div>
 
        </section>
    )
}