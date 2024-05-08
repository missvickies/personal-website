import styled from "styled-components"
import { device } from "./device"

export default function Polaroid({children,row,col}){
    const picture = children[0]
    const title = children[1]
    return (
        <PolaroidBorder row={row} col={col}>
            <Image>
                {picture? picture: children}
            </Image>
            <Description>
                {title? title: <Test></Test>}
            </Description>
        </PolaroidBorder>
    )
}

const PolaroidBorder = styled.div`
    background:white;
    -webkit-box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5);
    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    grid-row:${(props)=> props.row};
    grid-column:${(props)=> props.col};

    @media ${device.mobileS}{
        height:400px;
        grid-row:5;
        grid-column:1;
        height:250px;
        width:200px;
    }

    @media ${device.tablet}{
        grid-row:${(props)=> props.row+2};
        grid-column:${(props)=> props.col+5};
    }
    
    @media ${device.laptop}{
        grid-row:${(props)=> props.row};
        grid-column:${(props)=> props.col};
        height:250px;
        width:200px;
    }
    @media ${device.desktop}{
        grid-row:${(props)=> props.row};
        grid-column:${(props)=>props.col+5};
        height:250px;
        width:200px;
    }
    
`

const Description =  styled.div`
    background:#EFEFEF;
    color:#776F6F;
    padding:10px 0 10px 0;
    font-size:0.9em;
`
const Test =styled.div`
    padding:20px 0 20px 0;
`
const Image = styled.div`
    margin:15px;
    height:100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    
`


