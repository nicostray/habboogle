import {useState, useEffect} from 'react'
import axios from 'axios'
const useSearch = (name) => {

    const hoteles = ['com', 'es', 'de', 'fr', 'fi', 'it', 'nl', 'com.tr', 'com.br']
    const [usuarios,setUsuarios] = useState([{}])

    useEffect(() => {
        hoteles.forEach(element => obtenerUsuarios(element))
    },[])
    

    const obtenerUsuarios = (hotel) => {
        axios(`https://www.habbo.${hotel}/api/public/users?name=${name}`)
            .then(res => {
                const usuario = res.data;
                setUsuarios(usuarios => [...usuarios, usuario])
                console.log(usuario)
            })
    }

    return [
        {usuarios}
    ]
}

export default useSearch