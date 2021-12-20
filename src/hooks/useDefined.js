
const useDefined = (peticion, respuesta) => {
    let defined = false
    if (peticion !== ''){
        respuesta = peticion
        defined = true
    }

    return [respuesta, defined]
        
    
}

export default useDefined
