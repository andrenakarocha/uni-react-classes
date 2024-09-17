import './style.css'
import logo from '../../imgs/logo.svg'

function Logo() {
    return(
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p><strong>Store</strong>Books</p>
        </div>
    )
}

export default Logo
