import GithubLink from '../assets/link-img/github.svg'
import LinkedinLink from '../assets/link-img/linkedin.svg'
import CodepenLink from '../assets/link-img/codepen.svg'
import styled from 'styled-components';

export default function FlexLinks() {
    return(
        <FlexContainer>
            <FlexItem>
                <img src = {GithubLink} alt="github link"/>
            </FlexItem>
            <FlexItem>
            <img src = {LinkedinLink} alt="Linkedin link"/>

            </FlexItem>
            <FlexItem>
            <img src = {CodepenLink} alt="codepen link"/>
            </FlexItem>
           
        </FlexContainer>
    )
}

const FlexContainer = styled.div`
    display:flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
    background-color:var(--green);
`

const FlexItem = styled.div`
    width:75px;
    height:75px;

    img:hover{
        transform: scale(1.5, 1.5);
    }
`


