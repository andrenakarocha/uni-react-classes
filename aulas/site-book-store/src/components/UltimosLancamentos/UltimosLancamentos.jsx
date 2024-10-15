import ProgressiveWebApps from '../../imgs/Progressive Web Apps.png'
import Sass from '../../imgs/Sass.png'
import TurbineSeuCSS from '../../imgs/Turbine seu CSS.png'
import imagemLivro from '../../imgs/Angula.png'
import { UltimosLancamentosContainer, NovosLivrosContainer } from './UltimosLancamentos.styles'
import { Titulo } from '../Titulo/Titulo.styles'
import CardRecomenda from '../CardRecomenda/CardRecomenda'

function UltimosLancamentos () {
    const livros = [
        {nome: 'Progressive Web Apps', id: 9, src: ProgressiveWebApps},
        {nome: 'Sass', id: 10, src: Sass},
        {nome: 'Turbine seu CSS', id: 11, src: TurbineSeuCSS}
    ]
    
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='EB9B00' tamanhoFonte='36px'>ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map (livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda titulo='Talvez você se interesse por' subtitulo='Angular 11' descricao='Construindo uma aplicação com a plataforma Google' img={imagemLivro} />
        </UltimosLancamentosContainer>        
    )   
}

export default UltimosLancamentos;