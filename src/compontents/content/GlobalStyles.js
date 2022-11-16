import styled from "styled-components";
export const GlobalStyles = styled.div`
    width:100vw;;
    height:100vh;
    background-color:hsl(228, 33%, 97%);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: flex-start;
    overflow-y:scroll;
    font-family: 'Rubik',sans-serif;
    
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Rubik',sans-serif;
        font-size: 16px;
    }

    p{
        font-size: 16px;
    }
`