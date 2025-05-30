import styled from "styled-components";

export const Button = styled.button`
        border:${(props) => (props.theme === "primary" ? "none" : "1px solid #000")};
        background-color:${(props) => (props.theme === "primary" ? "#9B6BFF" : "transparent")};  
        font-size: 16px;
        font-weight: 600;
        color: #000;
        padding: 16px 32px;
        width: fit-content;
        cursor: pointer;
        border-radius: 30px;
        margin-top: 20px;
        transition: 0.8s;

    &:hover {
        opacity: ${(props) => (props.theme === "secundary" ? "#9B6BFF" : "0.5")};
        background-color: ${(props) => (props.theme === "secundary" || props.theme === "terciario" ? "#9B6BFF" : "opacity")}; 
        color: ${(props) => (props.theme === "secundary" || props.theme === "terciario" ? "#fff" : "#fff")};
     }

    &:active {
        opacity: 0.5;
    }
    `;
