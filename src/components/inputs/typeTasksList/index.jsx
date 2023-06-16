export default function TypeTasksList(props){

    const TiposTarefas = [
        '',
        'projeto',
        'exercicio',
        'estudar',
        'entreterimento',
        'domestico',
        'leitura',
        'outro'
    ]
    
    return(
        <div className="typeTasksList">
            <select 
                required 
                value={props.valor}
                onChange={e => props.setFuncao({
                ...props.dados,tipoTarefa:e.target.value
                })}
            >
                {TiposTarefas.map(tipo => (
                    <option key={tipo}>
                        {tipo}
                    </option>
                ))}
            </select>
        </div>
    )
}