import styled from "styled-components";

export const Container = styled.div`
        background-color: #E0D3FF;  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 20px;
        height: 100vh;
    `;

export const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        max-width: 500px;
    `;

export const Title = styled.h2`
        color:rgb(0, 0, 0);
        text-align: center;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 700;
        margin-top: 110px;
    `;

export const ContainerInputs = styled.div`
        display: flex;
        gap: 20px;
    `;

export const Input = styled.input`
        border-radius: 10px;
        border: 1 px solid #d2dae2;
        background-color: #fff;
        padding: 12px 20px;
        outline: none;
        width: 100%;
        border: none;
    `;

export const InputLabel = styled.label`
        color: black;
        font-size: 12px;
        font-weight: 500;


        span {
            color: red;
            font-weight: bold;
        }
    `;
