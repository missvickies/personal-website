import styled from "styled-components"
import {device} from "./device"

export default function Note({color,children,row,col}){
    
    return (
        <Notepad color ={color} row={row} col = {col} >
            {children}
        </Notepad>
    )
}

const Notepad = styled.div`
    &:hover {
        z-index:1
      }

    @media ${device.mobileS}{
        width: 0px;
        height:0px;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
    }
    @media ${device.tablet}{
        grid-row:${(props)=> props.row +2};
        grid-column:${(props)=> props.col +5};
        background: var(--blue);
        background: ${(props)=>props.color};
        -webkit-box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5); 
        box-shadow: 0px 5px 11px -1px rgba(0,0,0,0.5);
        padding:14px;
        width: 180px;
        height:180px;

        //unhide text
        text-indent: 0;
        white-space: wrap;
    }
    @media ${device.laptop}{
        grid-row:${(props)=> props.row};
        grid-column:${(props)=> props.col};
    }
    
    @media ${device.desktop}{
        grid-row:${(props)=> props.row};
        grid-column:${(props)=> props.col + 5};
    }

`


