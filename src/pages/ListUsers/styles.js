import styled from "styled-components";

export const Container = styled.div`
        background: radial-gradient(61.11% 202.56% at 50% 49.95%, rgba(240, 240, 240, 0.7) 43%, rgba(2, 70, 98, 0.7) 62.5%);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 20px;
`;

export const Title = styled.h2`
        color:rgb(0, 0, 0);
        text-align: center;
        font-size: 38px;
        font-style: normal;
        font-weight: 600;
        margin-top: 120px;
        margin-bottom: 20px;
`;

export const ContainerUsers = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

    @media (max-width: 750px){
        grid-template-columns: 1fr;
    }
`;

export const CardUsers = styled.div`
        background-color: #dbdbdb;
        padding: 16px;
        border-radius: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        max-width: 380px;

        h3 {
            font-size: 24px;
            margin-bottom: 3px;
        }

        p {
            font-size: 14px;
            font-weight: 200;
        }
`;

export const TrashIcon = styled.img`
    cursor: pointer;
        padding-left: 30px;
        transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover{
        transform: translateY(-5px);  /* Move o ícone 10px para cima */
        opacity: 0.8;  /* Torna o ícone um pouco mais transparente */
    }

    &:active {
        transform: translateY(2px);  /* Move o ícone um pouco para baixo (efeito de "afundar") */
        opacity: 0.5;  /* Torna o ícone ainda mais transparente quando pressionado */
    }
`;

export const AvatarUser = styled.img`
        height: 80px;
`;
