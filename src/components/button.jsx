import styled from "styled-components"

export default function Button({col,children}){
    
    return (
        <ButtonStyle col = {col}>
            {children}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.div`
    grid-column:${(props)=> props.col};
    grid-row:-2;
    width:180px;
    align-items: center;
    padding: 5px 15px;
    padding-top:0;
    gap: 5px;
    background: #0D99FF;
    box-shadow: -10px 10px 0px #000000;
    border-radius: 15px;
    z-index:1;
    white-space: nowrap;
`



