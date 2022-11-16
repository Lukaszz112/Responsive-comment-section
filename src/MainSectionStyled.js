import styled from "styled-components";
export const MainSection = styled.div`
    height:75vh;
    width:38%;
    min-width:1000px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y:scroll;
    margin-top:5px;

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