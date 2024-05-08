import styled from "styled-components"
import { Link } from "react-router-dom";
import {device} from "./device"


export default function Button({col,children,linkTo,mailTo}){
    
    return (
        <ButtonStyle col = {col}>
            <Link to={linkTo? linkTo:""} onClick={mailTo? (e) => {
                window.location.href = mailTo;
                e.preventDefault();
            }:null}>{children}</Link>
        </ButtonStyle>
    )
}


const ButtonStyle = styled.div`
    grid-column:${(props)=> props.col-5};
    grid-row:-1;
    gap: 5px;
    z-index:1;
    white-space: nowrap;
    height:100%;
    margin-top:50%;

    h1{
        width:180px;
        margin:0;
        background: #0D99FF;
        padding: 5px 15px;
        box-shadow: -10px 10px 0px #000000;
        border-radius: 15px;
    }

    h1:hover{
        background-color: var(--yellow)
    }

    h1:active {
        background-color: var(--yellow);
        box-shadow: -5px 5px 0px #000000;
        transform: translate(-10px,10px);
        }

    @media ${device.laptop}{
        grid-row:-2;
    }
`



