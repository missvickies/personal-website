import styled from "styled-components"
import {device} from "./device"
export default function Title({children}){
    return (
        <div>
        <BorderTitle>{children}</BorderTitle>
        <NoStroke>{children}</NoStroke>
        </div>
      
    )
}

const BorderTitle = styled.h1`
font-size: 100px;
line-height: 100%;
letter-spacing: -0.05em;
margin:0;
z-index:1;
-webkit-text-fill-color: black;
-webkit-text-stroke: 5px white;
position:absolute;

@media ${device.laptop} {
    font-size: 100px;
}
@media ${device.laptopL} {
    font-size: 144px;
}

`
const NoStroke = styled.h1`
font-size: 100px;
line-height: 100%;
letter-spacing: -0.05em;
-webkit-text-stroke: 5px transparent;
z-index:2;
position:absolute;
margin:0;

@media ${device.laptop} {
    font-size: 100px;
}
@media ${device.laptopL} {
    font-size: 144px;
}

`