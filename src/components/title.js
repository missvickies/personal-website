import styled from "styled-components"
import {device} from "./device"

export default function Title({children}){
    return (
        <div>
        <BorderTitle>{children}</BorderTitle>
        </div>
      
    )
}

const BorderTitle = styled.h1`
font-size: 80px;
line-height: 100%;
letter-spacing: -0.05em;
margin:0;
z-index:1;
-webkit-text-fill-color: black;
position:absolute;

@media ${device.mobileS} {
    font-size: 80px;
}
@media ${device.laptop} {
    font-size: 80px;
}
@media ${device.laptopL} {
    font-size: 144px;
}
`