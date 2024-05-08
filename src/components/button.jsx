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
z-index:1;
white-space: nowrap;
margin:0;
display:flex;
align-items:center;
font-size:2em;
font-weight:bold;
background: #0D99FF;
padding: 15px;
box-shadow: -10px 10px 0px #000000;
border-radius: 15px;

&:hover{
    background-color: var(--yellow)
}

&:active {
    background-color: var(--yellow);
    box-shadow: -5px 5px 0px #000000;
    transform: translate(-10px,10px);
    }
`



