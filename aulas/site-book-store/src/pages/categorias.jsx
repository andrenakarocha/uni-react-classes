import Header from '../components/Header/index'
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
            <h1>CATEGORIAS</h1>
        </AppContainer>
    )
}
export default Categorias;
