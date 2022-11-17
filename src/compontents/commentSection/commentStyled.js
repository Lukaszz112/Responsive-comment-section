import styled from "styled-components";
export const CommentWrapper = styled.div`
    height: 18%;
    min-height: 170px;
    width: 98%;
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
            max-width:10%;
            margin-right: 2%;
        }
        p{
            margin-right:10px;
        }
        .username{
            font-weight:500;
        }

        .upperLeft{
            width:50%;
            height:100%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:flex-start;
        }

        .upperRight{
            width:50%;
            height:100%;
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            justify-content:flex-end;

            button{
                background-color: transparent;
                border:none;
                color:hsl(238, 40%, 52%);
                font-weight:500;
                padding: 3%;
                position:relative;
                top: -2.5px;

                &:hover{
                    cursor:pointer;
                    opacity:.7;
                }
            }
        }
    }
`

export const RepliesWrapper = styled.div`
    height: 18%;
    min-height: 170px;
    width: 90%;
    padding:20px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
    margin:10px;
    display:flex;
    position:relative;
    left: 4%;

    &::before{
        content:"";
        display: block;
        background-color: hsl(223, 19%, 93%);
        width:2px;
        height: 111%;
        position: absolute;
        left: -4.5%;
        top: -1%;
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
            max-width:10%;
            margin-right: 2%;
        }

        p{
            margin-right:10px;
        }

        .username{
            font-weight:500;
        }

        .upperLeft{
            width:50%;
            height:100%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:flex-start;
        }

        .upperRight{
            width:50%;
            height:100%;
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            justify-content:flex-end;

            button{
                background-color: transparent;
                border:none;
                color:hsl(238, 40%, 52%);
                font-weight:500;
                padding: 2%;
                position:relative;
                top: -2.5px;

                &:hover{
                    cursor:pointer;
                    opacity:.7;
                }
            }
        }
    }
`

export const CurrentUserBar = styled.div`
    height:20px;
    width:35px;
    background-color:hsl(238, 40%, 52%);
    color:white;
    font-size:.8em;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px;
    margin-right:15px;
    border-radius:3px;

`