import Logo from '../Logo/Logo.jsx'
import OpcoesHeader from '../OpcoesHeader/OpcoesHeader.jsx'
import IconesHeader from '../IconesHeader/index.js'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from './Header.styles.jsx'


function Header () {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/home');
    }

    return (
        <HeaderContainer>
            <Logo onClick={handleLogoClick} />
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header