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
        overflow:hidden;
    }

    .plus:hover,.minus:hover{
        svg{
            transform:scale(1.5);
        }
        cursor:pointer;
    }

    .score{

    }

    .plus{
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }

    .minus{
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
    }

    svg{
        transition:all .2s ease-in-out;

    }

`