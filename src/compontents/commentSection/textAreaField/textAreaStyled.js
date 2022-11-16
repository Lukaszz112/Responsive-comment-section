import styled from "styled-components";
export const TextAreaWrapper = styled.div`
    height:80%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    .left,.right{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    
    .left{
        width:80%;  
        height:100%;
    }

    .right{
        align-items: flex-start;
        height:100%;
        width:20%;
        padding: 8px 0 0 10px;
    }
`

export const TextAreaField = styled.textarea`
    height:100%;
    min-height:135px;
    resize:none;
    position:relative;
    top:15px;
    width:100%;
    border-radius:10px;
    padding:20px;
    border: 1px solid hsl(223, 19%, 93%);

    &::placeholder{
        font-weight:500;
    }

    &:focus{
        outline:1px solid black !important;
    }

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        width: 5px;
        height: 5px;
        background-color:rgba(210, 215, 211,0);
        border-radius:10px;
     }

    &:hover{
        &::-webkit-scrollbar-thumb{
            background-color:rgba(210, 215, 211,.6);
        }
    }
`

export const Button = styled.button`
    width:80%;
    height:60%;
    color:white;
    font-weight:500;
    font-size:1.3em;
    background-color:hsl(238, 40%, 52%);\
    border:none;
    border-radius:10px;

    &:hover{
        opacity:.6;
        cursor:pointer;
    }
`