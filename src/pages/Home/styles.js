import styled from "styled-components";

export const Container = styled.div`
    background-color: #E0D3FF;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    min-height: 100vh; /* Mudança: min-height ao invés de height */
    
    /* Responsividade para mobile */
    @media (max-width: 768px) {
        padding: 10px;
        justify-content: flex-start;
        gap: 30px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
    width: 100%; /* Adicionado: ocupa toda a largura disponível */
    
    /* Responsividade para mobile */
    @media (max-width: 768px) {
        max-width: 100%;
        gap: 15px;
    }
`;

export const Title = styled.h2`
    color: rgb(0, 0, 0);
    text-align: center;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    margin-top: 110px;
    
    /* Responsividade para mobile */
    @media (max-width: 768px) {
        font-size: 1.8rem; /* Fonte menor no mobile */
        margin-top: 20px; /* Menos margem superior */
        margin-bottom: 20px;
    }
    
    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-top: 10px;
    }
`;

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    
    /* Responsividade para mobile */
    @media (max-width: 768px) {
        flex-direction: column; /* Inputs ficam em coluna no mobile */
        gap: 15px;
    }
`;

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2dae2; /* Corrigido: espaço removido */
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
    font-size: 16px; /* Adicionado: evita zoom no iOS */
    
    /* Responsividade para mobile */
    @media (max-width: 768px) {
        padding: 15px; /* Mais padding para facilitar o toque */
        font-size: 16px; /* Mantém tamanho para evitar zoom */
    }
`;

export const InputLabel = styled.label`
    color: black;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px; /* Adicionado: espaço entre label e input */
    display: block; /* Adicionado: label ocupa linha inteira */

    span {
        color: red;
        font-weight: bold;
    }
    
    /* Responsividade para mobile */
    @media (max-width: 768px) {
        font-size: 14px; /* Fonte um pouco maior no mobile */
    }
`;