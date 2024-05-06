import styled from "styled-components"

export default function Note({color,uid,children,row,col}){
    
    return (
        <Notepad color ={color} row={row} col = {col} >
            {children}
        </Notepad>
    )
}

const Notepad = styled.div`
    background: var(--blue);
    background: ${(props)=>props.color};
    padding: 0px;
    -webkit-box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5);
    text-align:center;
    grid-row:${(props)=> props.row};
    grid-column:${(props)=> props.col};
    width: 200px;
    height:200px;
    margin:auto;
    &:hover {
        z-index:1
      }

`


