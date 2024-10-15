import { Opcao, Opcoes, Link } from './OpcoesHeader.styles.jsx'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao key={texto}>
                    <Link to={`/${texto.toLowerCase().replace(' ', '')}`}>{texto}</Link>
                </Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;