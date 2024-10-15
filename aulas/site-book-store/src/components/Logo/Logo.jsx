import logo from '../../imgs/logo.svg'
import { LogoContainer, LogoImage } from './Logo.styles'

const Logo = ({ onClick }) => {
    return (
        <LogoContainer onClick={onClick}>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            <p><strong>Store</strong>Books</p>
       </LogoContainer>
    )
}

export default Logo