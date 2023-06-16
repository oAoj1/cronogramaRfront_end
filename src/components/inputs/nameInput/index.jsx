export default function NameInput(props){
    return(
        <div className="nameInput">
            <input
                required 
                type="text"
                disabled={props.desabilitar}
                placeholder={props.place}
                value={props.valor}
                onChange={e => props.setFuncao({
                    ...props.dados, 
                    nomeTarefa:e.target.value
                })}
            />
        </div>
    )
}