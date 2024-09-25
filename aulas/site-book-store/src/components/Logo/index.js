import logo from '../../imgs/logo.svg'
import { LogoContainer, LogoImage } from './style.js'


function Logo() {
    return(
        <LogoContainer>
            <LogoImage src={logo} alt='logo'/>
            <p><strong>Store</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo
