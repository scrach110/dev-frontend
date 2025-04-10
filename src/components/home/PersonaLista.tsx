import { PersonaModel } from "../../model/personaModel"
import { PersonaRow } from "./PersonaRow"



export const PersonaLista: React.FC<{personas: PersonaModel[]}> = (personas) => {
    return(
        <div>
            <h1> Todas las Personas</h1>
                <div className="row">
                    {personas.map((p) => (<PersonaRow persona={p}/>))}
                </div>
        </div>
    )
    
}