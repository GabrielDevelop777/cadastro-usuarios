    import styled from "styled-components";

    export const Button = styled.button`
        border:${props => props.theme === 'primary' ? 'none' : '1px solid #000'};
        background-color:${props => props.theme === 'primary' ? '#5CC5F2' : 'transparent'};  
        font-size: 16px;
        font-weight: 600;
        color: #000;
        padding: 16px 32px;
        width: fit-content;
        cursor: pointer;
        border-radius: 30px;
        margin-top: 20px;

    &:hover {
        opacity: ${props => props.theme === 'secundary' ? '#5CC5F2' : '0.7'};
        background-color: ${props => props.theme === 'secundary' || props.theme === 'terciario' ? '#5CC5F2' : 'opacity'}; 
        color: ${props => props.theme === 'secundary' || props.theme === 'terciario' ? '#fff' : '#000'};
     }

    &:active {
        opacity: 0.5;
    }
    `

