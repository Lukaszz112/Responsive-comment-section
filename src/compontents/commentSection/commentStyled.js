import styled from "styled-components";
export const CommentWrapper = styled.div`
    height: 18%;
    width: 38%;
    padding:20px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
    margin:10px;
    display:flex;

    .left,.right{
        display:flex;

        justify-content:center;
    }

    .left{
        justify-content:flex-start;
        align-items:flex-start;
    }

    .right{
        padding:20px;
        flex-direction:column;
        align-items:center;
    }
`

export const RepliesWrapper = styled.div`
    height: 18%;
    width: 35%;
    padding:20px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 20px;
    margin:10px;
    display:flex;
    position:relative;
    left: 1.6%;

    &::before{
        content:"";
        display: block;
        background-color: hsl(223, 19%, 93%);
        width:2px;
        height: 111%;
        position: absolute;
        left: -5%;
        top: -2%;
    }

    .left,.right{
        display:flex;
        justify-content:center;
    }

    .left{
        justify-content:flex-start;
        align-items:flex-start;
    }

    .right{
        padding:20px;
        flex-direction:column;
        align-items:center;
    }
`