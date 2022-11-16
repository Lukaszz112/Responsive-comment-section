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
        padding-bottom:20px;
        padding-left:20px;
        flex-direction:column;
        align-items:center;
        
        p{
            color:grey;
        }
    }

    .upper{
        height:100%;
        width:100%;
        display:flex;
        padding:0px;
        align-items:center;
        justify-content:flex-start;
        margin-bottom:10px;
        img{
            max-width:6%;
            margin-right: 2%;
        }
        p{
            margin-right:10px;
        }
        .username{
            font-weight:500;
        }
    }
`

export const RepliesWrapper = styled.div`
    height: 18%;
    width: 34%;
    padding:20px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
    margin:10px;
    display:flex;
    position:relative;
    left: 2%;

    &::before{
        content:"";
        display: block;
        background-color: hsl(223, 19%, 93%);
        width:2px;
        height: 111%;
        position: absolute;
        left: -6%;
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

        p{
            color:grey;
        }
    }

    .upper{
        height:100%;
        width:100%;
        display:flex;
        padding:0px;
        align-items:center;
        justify-content:flex-start;
        margin-bottom:10px;
        img{
            max-width:6%;
            margin-right: 2%;
        }
        p{
            margin-right:10px;
        }
        .username{
            font-weight:500;
        }
    }
`