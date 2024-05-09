import styled from "styled-components"
import {device} from "./device"

export default function Tab(){
    return (
        <FlexContainer> 
            <BorderText><h1>About Me</h1> </BorderText>
            <BorderCard>
            <p>
            I’m Computer Science graduate from Carleton University where I gained my knowledge in OOP programming, web development and data management principles.
            </p>
            <p>
            I am fuelled by a genuine passion for turning ideas into tangible solutions through code.
            I have extensive internship experience building insightful dashboards and crafting intuitive UIs using Python and React. I enjoy visualizing data and compiling them into digestable analytics. Complemented by a natural love for the frontend, this has allowed me to create simplistic yet dynamic interfaces that are highly reusable. 
            </p>
            <p>
            Currently, I am actively seeking new opportunities to apply and further expand my expertise.
            </p>
            </BorderCard>
        </FlexContainer>
    )
}

const FlexContainer =  styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, 75px);
    grid-template-rows: repeat(auto-fill, 75px);
    
    @media ${device.mobileS}{
        grid-template-columns: repeat(auto-fill, 50px);
        grid-template-rows: repeat(auto-fill, 50px);
        display:flex-column;
    }
    @media ${device.tablet}{
        display:grid;
        grid-template-columns: repeat(auto-fill, 50px);
        grid-template-rows: repeat(auto-fill, 50px);
        display:flex-column;
    }

`
const BorderCard = styled.div`
    background-color: white;
    padding: 25px;
    grid-column: 1/-1;
    margin-bottom:50px;

    @media ${device.tablet} { 
        padding: 20px;
        grid-column: 2/-1;
    }
    @media ${device.laptop} {
        padding: 20px;
        grid-column: 1/-1;
        grid-row: 2
        min-height:275px;
    }
    @media ${device.laptop} {
        padding: 20px;
        grid-row: 2
        max-width:1000px;
        min-height:300px;
    }
`
const BorderText = styled.div`
    grid-column:1/4;
    background: #FFCD29;
    text-align:center;
    margin-top:auto;

    h1{
        margin:0;
    }

    @media ${device.tablet} { 
        grid-column: 2/5;
    }
    @media ${device.laptop} { 
        grid-column: 1/4;
    }

`
