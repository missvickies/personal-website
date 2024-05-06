import styled from "styled-components"


export default function Polaroid({children,row,col}){
    const picture = children[0]
    const title = children[1]
    return (
        <PolaroidBorder row={row} col = {col}>
            <Image>
                {picture}
            </Image>
            <Description>
                {title}
            </Description>
        </PolaroidBorder>
    )
}

const PolaroidBorder = styled.div`
    background:white;
    -webkit-box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5);
    text-align:center;
    grid-row:${(props)=> props.row};
    grid-column:${(props)=> props.col};
    display:flex;
    height:220px;
    width:200px;
    padding:20px;
    flex-direction: column;
    justify-content: center;
`

const Description =  styled.div`
    height:20px;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:20px;
`
const Image = styled.div`
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    
`


