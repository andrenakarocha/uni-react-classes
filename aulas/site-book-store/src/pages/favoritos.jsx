import Header from '../components/Header/Header'
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const Categorias = () => {
    return ( 
        <AppContainer>
            <Header />
            <h1>FAVORITOS</h1>
        </AppContainer>
    )
}
export default Categorias;