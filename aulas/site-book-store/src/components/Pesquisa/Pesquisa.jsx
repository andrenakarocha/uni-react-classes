import Input from '../Input/Input.styles'
import { PesquisaContainer, Titulo, Subtitulo, ResultadosContainer, Resultado } from './Pesquisa.styles'
import { useState } from 'react'
import { livros } from './dadosPesquisa'


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={evento => {
                    const textoDigitado = evento.target.value
                    if (textoDigitado === '') {
                        setLivrosPesquisados([]); 
                    } else {
                        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
                        setLivrosPesquisados(resultadoPesquisa);
                    }
                }}
            />
            <ResultadosContainer>
            {livrosPesquisados.map(livro => (
                <Resultado key={livro.id}>
                    <img src={livro.src} alt={livro.nome} />
                    <p>{livro.nome}</p>
                </Resultado>
            )) }
            </ResultadosContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa
