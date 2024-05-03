import styled from "styled-components"

export default function BorderedText({children}){
    return (
        <Border>
            <h1>{children}</h1>
        </Border>
    )
}

const Border = styled.div`
    background: #FFCD29;
    border: 5px solid #000000;
    border-radius: 5px;
    text-align:center;
    margin:auto;

    h1{
        margin:0;
    }

`