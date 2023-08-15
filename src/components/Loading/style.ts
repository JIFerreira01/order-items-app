import { keyframes, styled } from "styled-components";

export const DivLoading = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(2px);
    `
const moviments = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0%);
    }
`

export const DivLoadingEllipsis = styled.div`
    width: 100%;
    height: 50px;
    top: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    & > div:nth-child(1) {
        width: 10px;
        height: 10px;
        background-color: #00A2FF;
        animation: ${moviments} 1s infinite;
        margin: 5px;
        border-radius: 100%;
    }
    & > div:nth-child(2) {
        width: 10px;
        height: 10px;
        animation: ${moviments} 2.1s infinite;
        background-color: #00A2FF;
        margin: 5px;
        border-radius: 100%;
    }
    & > div:nth-child(3) {
        width: 10px;
        height: 10px;
        animation: ${moviments} 2.5s infinite;
        background-color: #00A2FF;
        margin: 5px;
        border-radius: 100%;
    }
`

