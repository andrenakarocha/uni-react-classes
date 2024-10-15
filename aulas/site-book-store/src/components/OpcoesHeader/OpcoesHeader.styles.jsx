import styled from "styled-components"
import { Link as RouterLink } from 'react-router-dom'

export const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

export const Opcoes = styled.ul`
    display: flex;
`

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: #000;
    &:hover {
        color: #007BFF;
    }
`