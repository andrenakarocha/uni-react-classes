import perfil from '../../imgs/perfil.svg'
import sacola from '../../imgs/sacola.svg'
import { Icone, Icones } from './IconesHeader.styles'

const icones = [perfil, sacola]

function IconesHeader () {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone} alt='icone'></img></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader