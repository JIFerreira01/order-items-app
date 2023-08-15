import { styled } from "styled-components";

export const Button = styled.button `
    background: #fff;
    border: 3px solid #EAEAEA;
    border-radius: 8px;
    margin-right: 10px;
    border: ${props => props["aria-selected"] ? "3px solid #00A2FF" : "none"}
`

export const DivLoading = styled.div`
    width: 400px;
    height: 644px;
    background-color: rgba(0, 0, 0, 0.35);
    `
    
    export const DivLoading__container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`