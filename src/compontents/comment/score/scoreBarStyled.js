import styled from "styled-components";
export const ScoreBarWrapper = styled.div`
    width:40px;
    height:80%;
    max-height:100px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;  
    background-color:hsl(228, 33%, 97%);
    padding:5px;
    border-radius:10px;
    
    p{
        color:hsl(238, 40%, 52%);
        font-weight:500;
    }

    .plus,.minus,.score{
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        height:100%;
    }

    .plus:hover,.minus:hover{
        transform:scale(1.5);
        transform:;
        cursor:pointer;
    }

    .plus{
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }

    .minus{
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
    }

`