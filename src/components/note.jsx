import styled from "styled-components"

export default function Note({color,children,row,col}){
    
    return (
        <Notepad color ={color} row={row} col = {col} >
            {children}
        </Notepad>
    )
}

const Notepad = styled.div`
    background: var(--blue);
    background: ${(props)=>props.color};
    -webkit-box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5);
    grid-row:${(props)=> props.row};
    grid-column:${(props)=> props.col};
    padding:14px;
    width: 180px;
    height:180px;
    &:hover {
        z-index:1
      }

`


