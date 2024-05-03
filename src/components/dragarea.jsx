import React from 'react';
import styled from "styled-components"
import {DndContext, useDroppable} from '@dnd-kit/core';
import Note from './note'
import {useState} from 'react';


function Droppable(props){
    const {isOver,setNodeRef} = useDroppable({
        id: "test",
        });
    const style = {
        color: isOver ? 'green' : undefined,
    };
    return(
        <Area ref={setNodeRef} style={style}>
            {props.children}
        </Area>
    )
}

export default function DragArea() {
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <Note uid = "1">Drag me</Note>)
    return (
        <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
         <Droppable>
            {isDropped ? draggableMarkup : 'Drop here'}
         </Droppable>
    </DndContext>
    );
    function handleDragEnd(event) {
        if (event.over && event.over.id === 'test') {
        setIsDropped(true);
        }
    }
}
const Area = styled.div`
    background: red;
    grid-row:1;
    grid-column:1;
`