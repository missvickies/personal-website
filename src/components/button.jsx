import styled from "styled-components"
import { Link } from "react-router-dom";


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
    grid-column:${(props)=> props.col};
    grid-row:-2;
    width:180px;
    align-items: center;
    padding: 5px 15px;
    padding-top:0;
    gap: 5px;
    background: #0D99FF;
    box-shadow: -10px 10px 0px #000000;
    border-radius: 15px;
    z-index:1;
    white-space: nowrap;
    &:hover{
        background-color: var(--yellow)
    }
    &:active {
    background-color: var(--yellow);
    box-shadow: -5px 5px 0px #000000;
    transform: translate(-10px,10px);
    }
`



