import styled from "styled-components"
import {device} from "./device"
export default function Tab(){
    return (
        <FlexContainer> 
                <BorderText><h1>About Me</h1></BorderText>  
            <BorderCard>
            <p> Hi there, I am a recent computer science graduate from Carleton university. </p>
            <p>In the duration of my studies, I gained 16 months of developer experience working at RBC. </p>
            <p> Currently, I am looking for junior/new graduate opportunities in software development.</p>
            <p>Hope to connect with you soon! </p>
            </BorderCard>
        </FlexContainer>
    )
}
const FlexContainer =  styled.div`
display:grid;
height:100%;
grid-template-columns: repeat(auto-fill, 75px);
grid-template-rows: repeat(auto-fill, 75px);
`
const BorderCard = styled.div`
background-color: white;
border: 5px solid #000000;
border-radius: 5px;
margin-top:-5px;
grid-column: 1/-1;
grid-row: 2 /-1;
padding: 25px 24px;
@media ${device.desktop} { 
    padding: 50px;
}
`
const BorderText = styled.div`
    grid-column:span 3;
    background: #FFCD29;
    border: 5px solid #000000;
    border-radius: 5px;
    text-align:center;
    margin-top:auto;

    h1{
        margin:0;
    }

`
