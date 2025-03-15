    import styled from "styled-components"


    export const Container = styled.div`
        background: radial-gradient(61.11% 202.56% at 50% 49.95%, rgba(240, 240, 240, 0.7) 43%, rgba(2, 70, 98, 0.7) 62.5%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 20px;
        height: 100vh;
    `


    export const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        max-width: 500px;
    `


    export const Title = styled.h2`
        color:rgb(0, 0, 0);
        text-align: center;
        font-size: 38px;
        font-style: normal;
        font-weight: 600;
        margin-top: 110px;
    `


    export const ContainerInputs = styled.div`
        display: flex;
        gap: 20px;
    `


    export const Input = styled.input`
        border-radius: 10px;
        border: 1 px solid #d2dae2;
        background-color: #fff;
        padding: 12px 20px;
        outline: none;
        width: 100%;
        border: none;
    `


    export const InputLabel = styled.label`
        color: black;
        font-size: 12px;
        font-weight: 500;


        span {
            color: red;
            font-weight: bold;
        }
    `





