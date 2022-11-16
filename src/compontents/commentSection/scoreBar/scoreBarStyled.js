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
        path{
            fill:hsl(238, 40%, 52%);
        }
        cursor:pointer;
    }

    .plus{
        path{
            fill:${props => props.state.isRatePlus ? "hsl(238, 40%, 52%)":""};
            transition:all .1s ease-in-out;
        }
    }

    .minus{
        path{
            fill:${props => props.state.isRateMinus ? "hsl(238, 40%, 52%)":""};
            transition:all .1s ease-in-out;
        }
    }

    
`