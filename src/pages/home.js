import styled from 'styled-components';
import FlexLinks from '../components/links'
import BorderedText from '../components/bordertext';
import Title from '../components/title';
import Tab from '../components/tab'
import Dp from '../assets/profile-img/profile.jpeg'
import StarImg1 from '../assets/profile-img/Star-1.svg'
import StarImg2 from '../assets/profile-img/Star.svg'
import CoffeeImg from '../assets/profile-img/mug.svg'
import Note from "../components/note"
import { device } from '../components/device';
import Polaroid from '../components/polaroid';
import amplifyImage from '../assets/project-img/amplify.jpeg';

export default function Home(){

    const notes = [
        {
            uid: "0",
            row:3,
            col:2,
            color: "var(--yellow)",
            text:"fun fact"
        },
        {
            uid: "1",
            row:4,
            col:1,
            color: "var(--pink)",
            text:"another one"
        },
        {
            uid: "2",
            row:7,
            col:4,
            color: "var(--blue)",
            text:"seomthing else"
        },
        {
            uid: "3",
            row:6,
            col:5,
            color: "var(--darkblue)",
            text:"project details"
        },
    ]

    return(
        <Grid>
            <div></div>
            <SubGrid>
                {/* <Links>
                    <FlexLinks/>
                </Links> */}
                {/* <Photo/> */}
                {/* <Star1>
                    <img src = {StarImg2} alt = "stars"/>
                </Star1> */}
                <Star2>
                    <img src = {StarImg1} alt = "star"></img>
                </Star2>
                {/* <Note uid="1"/>
                <Note uid = "1" color = "var(--yellow)"/>
                <Note color = "var(--pink)"/> */}
                {/* <Coffee>
                    <img src = {CoffeeImg} alt = "coffee mug"></img>
                </Coffee> */}

                {notes.map((note)=>(
                    <Note uid={note.uid} row={note.row} col={note.col} color={note.color}><p>{note.text}</p></Note>
                ))}
                <Polaroid uid="rbc" row="7"col="1"><img alt="" src = {amplifyImage}/><p>Amplify 2022</p></Polaroid>
                <Polaroid uid="rbc" row="2"col="5"><img alt = "" src = {Dp}/><p></p></Polaroid>
                <Intro><BorderedText>Hello my name is...</BorderedText></Intro>
                <HorizontalLinks>
                    <FlexLinks/>
                </HorizontalLinks>
                <Name><Title>Vicki Chen</Title></Name>
                <About>
                    <Tab></Tab>
                </About>
            </SubGrid>
            <div></div>
        </Grid>
    )
}

const Star2 = styled.div`
    z-index:1;
    grid-column-start: 7;
    grid-row-start: 3;
    margin-left:25px;

    -webkit-animation:spin 4s linear infinite;

    @media ${device.laptop}{
        grid-column-start: 7;
        grid-row-start: 2;
    }

`
const Star1 = styled.div`
    z-index:1;
    grid-column-start: 5;
    grid-row-start: 1;

    -webkit-animation:spin 2s linear infinite;
        
    @keyframes spin {
        0% {
            -webkit-transform: rotate(0turn);
        }
        25% {
            -webkit-transform: rotate(0.01turn);
        }
        50% {
            -webkit-transform: rotate(0turn);
            -webkit-transform: translate(15px);
        }
        75% {
            -webkit-transform: rotate(-0.01turn);
        }
        100% {
            -webkit-transform: rotate(0turn);
        }    
    }
    @media ${device.laptop} { 
        grid-column-start: 2;
        grid-row-start: 1;
    }
    @media ${device.desktop} { 
        grid-column-start: 7;
        grid-row-start: 1;
    }
`
const Coffee = styled.div`
    z-index:1;
    grid-column: 2 / 6;
    grid-row: 9/ -1;
    overflow:hidden;

    `

export const Grid = styled.div`
    display:grid;
    grid-template-columns: 75px auto 75px;
    width: 100vw;
    height:100vh;
`;

export const SubGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, 75px);
    grid-template-rows: repeat(auto-fill, 75px);
    width: 100%;
    height:100%;
    overflow: hidden;  /* NEW */
`;

export const Links = styled.div`
    display:none;
@media ${device.laptop} { 
    display:block;
    grid-column-start: 1;
    grid-row:  4 / 7;
}
`;

export const HorizontalLinks = styled.div`
@media ${device.laptop} { 
    grid-column: 15 / -1;
    grid-row:  2;
}
@media ${device.desktop} { 
    grid-column: 30 / -1;
}
`;

export const Photo = styled.div`
        grid-column: 1 / -1;
        grid-row: 5/12;
        border: 5px solid #000000;

        /* boxy-shadow */
        filter: drop-shadow(-5px 5px 0px #000000);
        border-radius: 20px;

        /* Photo */
        background-color:yellow;
        background:url(${Dp});
        background-repeat:no-repeat;
        background-size: cover;
        background-position: center;

        
    @media ${device.laptop} { 
        // grid-column: 4 / 8;
        // grid-row:  2 / 6;
        grid-column: 5 / 8;
        grid-row:  2 / 5;
    }
    @media ${device.desktop} { 
        grid-column: 10 / 14;
        grid-row:  2 / 6;
    }
`;

export const Intro = styled.div`

grid-column: 1 / -1;
grid-row:2;

    @media ${device.laptop} { 
        grid-column: 9 / 13;
        grid-row:2;
    }
    @media ${device.desktop} { 
        grid-column: 15 / 19;
    }
`
export const Name = styled.div`
    grid-column: 1 / -1;
    grid-row:3/5;
    background-color:var(--green);

    @media ${device.laptop} { 
        grid-column: 9 / -1;
        grid-row:3/5;
    }
    @media ${device.desktop} { 
        grid-column: 15 / -1;
        grid-row:3/5;
    }
`
export const About = styled.div`
grid-column: 1 / -1;
grid-row: 12/20;

@media ${device.laptop} { 
    grid-column: 9 / -1;
    grid-row: 5/-2;
}
@media ${device.desktop} { 
    grid-column: 15 / -1;
}
`

