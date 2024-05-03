import styled from "styled-components"
import {useDraggable} from '@dnd-kit/core';
import { Children } from "react";
import amplifyImage from '../assets/project-img/amplify.jpeg';


export default function Polaroid({uid,row,col}){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: uid,
      });
      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;
    return (
        <PolaroidBorder row={row} col = {col} ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <Image></Image>
            <Description><p>Amplify Winner</p></Description>
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
    padding:15px;
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
    height:200px;
    background-image: url(${amplifyImage});
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center;
`



