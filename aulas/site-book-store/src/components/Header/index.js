import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from './style.js'


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