import styled from 'styled-components';
import FlexLinks from '../components/links'
import BorderedText from '../components/bordertext';
import Title from '../components/title';
import Tab from '../components/tab'
import Dp from '../assets/profile-img/profile.jpeg'
import StarImg1 from '../assets/profile-img/Star-1.svg'
import Note from "../components/note"
import { device } from '../components/device';
import Polaroid from '../components/polaroid';
import amplifyImage from '../assets/project-img/amplify.jpeg';

export default function Home(){
    document.body.style.backgroundColor= "#FAF9F6";


    const notes = [
        {
            uid: "0",
            row:3,
            col:2,
            color: "var(--yellow)",
            text:
            <div>
                <p>Fun Fact:</p>
                <p>I am a FRC robotics alumni. We won the rookie of the year award!</p>
                <img alt = "FRC logo" height="50px"src="https://upload.wikimedia.org/wikipedia/en/f/f0/FRC_Logo.svg"></img>
            </div>
        },
        {
            uid: "1",
            row:4,
            col:1,
            color: "var(--pink)",
            text:
            <div>
                <p>I'm most familiar with</p>
                <p>- Python</p>
                <p>- React</p>
            </div>
        },
        {
            uid: "2",
            row:7,
            col:4,
            color: "var(--blue)",
            text:
            <div>
            <p>Another Fun Fact:</p>
            <p>I love learning.</p>
            <p>I've taught myself how to metal smith, sew, and bake. Currently trying to learn how to fish! </p>
        </div>
        },
        {
            uid: "3",
            row:6,
            col:5,
            color: "var(--darkblue)",
            text:
            <div>
                <p>Take a look at my projects <a href ="https://www.notion.so/Hey-there-I-m-Vicki-bc50e4028cb44ce2a6d2c6bebecd5382"> here!</a></p>
            </div>
        },
    ]

    return(
        <Grid>
            <div></div>
            <SubGrid>
              
                <Star2>
                    <img src = {StarImg1} alt = "star"></img>
                </Star2>

                {notes.map((note)=>(
                    <Note uid={note.uid} row={note.row} col={note.col} color={note.color}><p>{note.text}</p>
                    </Note>
                ))}
                <Polaroid uid="rbc" row={7}col={1}><img alt="rbc amplify picture" src = {amplifyImage}/><p>RBC Amplify 2022</p></Polaroid>
                <Polaroid uid="rbc" row={2}col={5}><img alt = "profile picture" src = {Dp}/></Polaroid>
                <Intro>
                    <BorderedText>Hello my name is...</BorderedText>
                    <FlexLinks/>
                </Intro>
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
    grid-column-start: 6;
    grid-row-start: 5;
    
    @media ${device.laptop}{
        z-index:1;
        grid-column-start: 7;
        grid-row-start: 3;
        margin-left:25px;
        -webkit-animation:spin 4s linear infinite;
    }

`

export const Grid = styled.div`
    display:grid;
    width: 100vw;
    height:100vh;
    grid-template-columns: 75px auto 75px;

    @media ${device.mobileS}{
        grid-template-columns: 25px auto 25px;
        overflow:visible;
    }
    @media ${device.tablet}{
        grid-template-columns: 75px auto 75px;
        overflow:hidden;
    }
    
`;

export const SubGrid = styled.div`
    display:grid;
    width: 100%;
    height:100%;
    grid-template-columns: repeat(auto-fill, 75px);
    grid-template-rows: repeat(auto-fill, 75px);

    @media ${device.mobileS} { 
        grid-template-columns: repeat(auto-fill, 50px);
        grid-template-rows: repeat(auto-fill, 50px);

    }
    @media ${device.tablet} { 
        grid-template-columns: repeat(auto-fill, 75px);
        grid-template-rows: repeat(auto-fill, 75px);
    }

    @media ${device.laptop} { 
        grid-template-columns: repeat(auto-fill, 75px);
        grid-template-rows: repeat(auto-fill, 75px);
    }
`;

export const Links = styled.div`
    display:none;
    @media ${device.laptop} { 
        display:block;
        grid-column-start: 1;
        grid-row:  4 / 7;
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

    grid-row:2;
    grid-column: 9/-1;
    display:flex;
    justify-content:space-between;
    align-items: center;
    
    @media ${device.mobileS} { 
        grid-column: 1/-1;
    }
    @media ${device.tablet} { 
        grid-column: 9 / -1;
    }
    @media ${device.desktop} { 
        grid-column: 15/24;
    }
`
export const Name = styled.div`
    grid-column: 1 / -1;
    grid-row:3;

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

@media ${device.mobileS} { 
    grid-column: 1 / -1;
    grid-row: 11/-1;
}

@media ${device.laptop} { 
    grid-column: 9 / -1;
    grid-row: 5/-2;
}
@media ${device.desktop} { 
    grid-column: 15 / 24;
}
`

