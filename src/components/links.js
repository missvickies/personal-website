import GithubLink from '../assets/link-img/github.svg'
import LinkedinLink from '../assets/link-img/linkedin.svg'
import CodepenLink from '../assets/link-img/codepen.svg'
import styled from 'styled-components';
import { device } from './device';

export default function FlexLinks() {
    return(
        <FlexContainer>
            <FlexItem>
                <a href="https://github.com/missvickies">
                <img src = {GithubLink} alt="github link"/>
                </a>
            </FlexItem>
            <FlexItem>
                <a href="https://linkedin.com/in/missvickies">
                <img src = {LinkedinLink} alt="Linkedin link"/>
                </a>
            </FlexItem>
            <FlexItem>
                <a href="https://codepen.io/MissesVickies">
                <img src = {CodepenLink} alt="codepen link"/>
                </a>
            </FlexItem>
           
        </FlexContainer>
    )
}

const FlexContainer = styled.div`
    display:flex;
    justify-content: space-evenly;
`

const FlexItem = styled.div`
    img{
        width:50px;
        height:50px;

    }

    img:hover{
        transform: scale(1.5, 1.5);
    }
`


