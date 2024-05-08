import styled from "styled-components"
import { device } from "./device"
export default function BorderedText({children}){
    return (
        <Border>
            <h1>{children}</h1>
        </Border>
    )
}

const Border = styled.div`
    background: #FFCD29;
    text-align:center;

    h1{
        margin:auto;
    }

    @media ${device.mobileS}{
        h1{
            font-size:20px;
        }
    }

    @media ${device.tablet}{
        h1{
            font-size:1.5em;
        }
    }

`