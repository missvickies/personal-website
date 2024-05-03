import styled from "styled-components"
import {useDraggable} from '@dnd-kit/core';

export default function Note({color,uid,children,row,col}){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: uid,
      });
      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;
    return (
        <Notepad color ={color} row={row} col = {col} ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </Notepad>
    )
}

const Notepad = styled.div`
    background: var(--blue);
    background: ${(props)=>props.color};
    padding: 15px;
    -webkit-box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5);
    text-align:center;
    grid-row:${(props)=> props.row};
    grid-column:${(props)=> props.col};
    width: 200px;
    height:200px;
    margin:auto;
`


