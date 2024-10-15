import { Titulo } from '../Titulo/Titulo.styles'
import { Card, Subtitulo, ImgLivro, Botao, Descricao } from './CardRecomenda.styles'

function CardRecomenda({titulo, subtitulo, descricao, img}) { 
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte='16px' cor='#EB9B00' alinhamento='left'>{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda;