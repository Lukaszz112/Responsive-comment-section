import styled from "styled-components";
export const CommentWrapper = styled.div`
    height: 20%;
    width: 60%;
    padding:20px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 20px;
    margin:10px;
    display:flex;

    .left,.right{
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .right{
        flex-direction:column;
    }
`