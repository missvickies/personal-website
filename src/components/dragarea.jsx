import React from 'react';
import styled from "styled-components"
import {DndContext, useDroppable} from '@dnd-kit/core';
import Note from './note'
import {useState} from 'react';
import Polaroid from './polaroid'

function Droppable(props){
    const {isOver,setNodeRef} = useDroppable({
        id: props.id,
        });
    const style = {
        color: isOver ? 'green' : undefined,
        gridRow:props.row,
        gridColumn:props.col
    };

    return(
        <Area ref={setNodeRef} style={style} >
            {props.children}
        </Area>
    )
}

export default function DragArea() {
    // const containers = [
    //     {
    //         id:"test-1",
    //         row:"1/3",
    //         col:"1/4"
    //     },
    //     {
    //         id:"test-2",
    //         row:"2/5",
    //         col:"3/6"
    //     },
    //     {
    //         id:"test-3",
    //         row:"3/6",
    //         col:"6/9"
    //     },
    // ]

    const notes = [
        {
            uid: "0",
            row:4,
            col:1,
            color: "var(--yellow)",
            text:"fun fact"
        },
        {
            uid: "1",
            row:5,
            col:2,
            color: "var(--pink)",
            text:"another one"
        },
        // {
        //     uid: "2",
        //     row:5,
        //     col:3,
        //     color: "var(--blue)",
        //     text:"seomthing else"
        // },
        // {
        //     uid: "3",
        //     row:7,
        //     col:8,
        //     color: "var(--darkblue)",
        //     text:"project details"
        // },
    ]
    
    return (

        <DndContext onDragEnd={handleDragEnd}>
        {/* <Note uid = "1"><p> fun fact</p></Note>
        <Note color = "var(--yellow)" uid = "2"></Note>
        <Note color = "var(--pink)" uid = "3"></Note>
        <Note uid = "4"><p> soemthings</p></Note> */}
        {/* <Polaroid uid="rbc" row="4"col="5"></Polaroid> */}
            {notes.map((note)=>(
                <Note uid={note.uid} row={note.row} col={note.col} color={note.color}><p>{note.text}</p></Note>
            ))}
        <Polaroid uid="rbc" row="7"col="3"></Polaroid>
    
         </DndContext>
    );

    function handleDragEnd(event) {
        const {over} = event;
    }
}
const Area = styled.div`
    background: red;
`