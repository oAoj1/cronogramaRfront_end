export default function DaysList(props){

    const PeriodosDias = [
        '',
        'manha',
        'tarde',
        'noite'
    ]

    
    return(
        <div className="daysList">
            <select 
                required
                value={props.valor}
                onChange={e => props.setFuncao({
                    ...props.dados,periodoDia:e.target.value
                })}
            >
                {PeriodosDias.map(periodos => (
                    <option key={periodos}>
                        {periodos}
                    </option>
                ))}
            </select>
        </div>
    )
}