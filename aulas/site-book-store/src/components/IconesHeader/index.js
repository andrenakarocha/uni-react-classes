import './style.css'
import perfil from '../../imgs/perfil.svg'
import sacola from '../../imgs/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader () {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'><img src={icone} alt='icone'></img></li>
            ))}
        </ul>
    )
}

export default IconesHeader