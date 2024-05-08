import styled from "styled-components"
import {device} from "./device"
import Button from "./button"

export default function Tab(){
    return (
        <FlexContainer> 
                <BorderText><h1>About Me</h1></BorderText>  
            <BorderCard>
            <p>
            I’m Computer Science graduate from Carleton University where I gained my knowledge in OOP programming, web development and data management principles.
            </p>
            <p>
            I have work experience building insightful dashboards and crafting intuitive UIs using Python and React. I enjoy both data work and frontend development and am fuelled by a genuine passion for turning ideas into reality through code. 
            </p>
            <p>
            Currently seeking new opportunities.
            </p>
            </BorderCard>
            <Button mailTo="mailto:vickichen@cmail.carleton.ca" col = "4" > <h1>Contact Me </h1></Button>
            <Button col = "7" linkTo="/projects"><h1>Projects<svg width="62" height="25" viewBox="0 0 62 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.7678 20.7678C61.7441 19.7915 61.7441 18.2085 60.7678 17.2322L44.8579 1.32233C43.8815 0.34602 42.2986 0.34602 41.3223 1.32233C40.346 2.29864 40.346 3.88155 41.3223 4.85786L55.4645 19L41.3223 33.1421C40.346 34.1184 40.346 35.7014 41.3223 36.6777C42.2986 37.654 43.8815 37.654 44.8579 36.6777L60.7678 20.7678ZM0 21.5H59V16.5H0V21.5Z" fill="black"/>
            </svg></h1></Button>
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
    padding: 25px;
    grid-column: 1/-1;
    grid-row: 2/-1;
    display:flex-column;

@media ${device.desktop} { 
    padding: 50px;
    margin-top:-5px;
    grid-column: 1/-1;
    grid-row: 2 /-1;
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
