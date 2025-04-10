import { useState } from "react"
import allPersona from "../../api/persona/allPersonas"
import { PersonaModel } from "../../model/personaModel"

export const Home = () => {



    const [personas, setPersonas] = useState<PersonaModel[]>([])

    const handlerButtonPersona = async() => {
        const personas = await allPersona()
        console.log(personas);

        setPersonas(personas);
        
    }

    const handlerButtonAuto = () => {

    }

    return(
            <>
            <h1>Estás en el HOME</h1>
            <div>
                <button type="button" onClick={handlerButtonPersona}> Persona </button>
                <button type="button" onClick={handlerButtonAuto}> Autos </button>
                
                

            </div>
            </>
    )
}