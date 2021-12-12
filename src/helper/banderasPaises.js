import spain from '../images/banderas/spain.png'
import eeuu from '../images/banderas/eeuu.png'
import brasil from '../images/banderas/brasil.png'
import alemania from '../images/banderas/alemania.png'
import finlandia from '../images/banderas/finlandia.png'
import francia from '../images/banderas/francia.png'
import italia from '../images/banderas/italia.png'
import turquia from '../images/banderas/turquia.png'
import paises_bajos from '../images/banderas/paises_bajos.png'

const banderasPaises = (dominioHotel) => {
    switch(dominioHotel){
        case 'it':
            return italia;
        case 'us':
            return eeuu;
        case 'fr':
            return francia;
        case 'de':
            return alemania;
        case 'es':
            return spain;
        case 'fi':
            return finlandia;
        case 'tr':
            return turquia;
        case 'nl':
            return paises_bajos;
        case 'br':
            return brasil;
        
        default: break;
    }
}

export default banderasPaises
