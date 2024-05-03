import styled from "styled-components"
export default function Title({children}){
    return (
        <div>
        <BorderTitle>{children}</BorderTitle>
        <NoStroke>{children}</NoStroke>
        </div>
      
    )
}

const BorderTitle = styled.h1`

font-size: 144px;
line-height: 100%;
letter-spacing: -0.05em;
margin:0;
z-index:1;
-webkit-text-fill-color: black;
-webkit-text-stroke: 5px white;
position:absolute;

`
const NoStroke = styled.h1`
font-size: 144px;
line-height: 100%;
letter-spacing: -0.05em;
-webkit-text-stroke: 5px transparent;
z-index:2;
position:absolute;
margin:0;

`