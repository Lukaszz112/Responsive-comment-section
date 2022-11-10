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
    
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    p{
        font-size: 16px;
    }
`