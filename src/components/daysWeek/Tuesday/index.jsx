import '../../../Styles/DaysWeek.css'
import '../../../Styles/Annotations.css'
import '../../../Styles/Tasks.css'
import '../../../Styles/Times.css'
import { GrAddCircle } from 'react-icons/gr'
import { useState } from "react"
import { Link } from "react-router-dom"
import AllTimesTuesday from './Times/AllTimesTuesday'
import MorningTuesday from './Times/MorningTuesday.jsx'
import AfternoonTuesday from './Times/AfternoonTuesday.jsx'
import NightTuesday from './Times/NightTuesday.jsx'

export default function Tuesday(){

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
                <div className="filterContainer">
                    <select onChange={valor => setValorDia(valor.target.value)}>
                        {filtragemPeriodo.map(filtros => (
                            <option key={filtros}>
                                {filtros}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='addTaskButton'>
                    <Link to='/terca/adicionar'>
                        <button>
                            <GrAddCircle title='Adicionar tarefa'/>
                        </button>
                    </Link>
                </div>

            </div>
            
            <div className="periodsContainer">
                {valorDia == 'manha' ? <MorningTuesday/> :
                valorDia == 'tarde' ? <AfternoonTuesday/> :
                valorDia == 'noite' ? <NightTuesday/> :
                valorDia == 'dia todo' || valorDia == '' ? 
                <AllTimesTuesday/> : ''} 
            </div>
 
        </section>
    )
}