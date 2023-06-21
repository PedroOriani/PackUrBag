import styled from "styled-components"
import { BsHouseFill } from "react-icons/bs"
import { BsPersonFill } from "react-icons/bs"

export default function Footer () {
    return(
        <SCFooter>
            <SCBsHouseFill />
            <p>Your Travels</p>
            <BsPersonFill />
        </SCFooter>
    )
}

const SCFooter = styled.div`
    width: 100%;
    height: 70px;

    padding: 15px 15px 15px 15px;

    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index:10;

    box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.2);
`

const SCBsHouseFill = styled(BsHouseFill)`
    
`
const SCBsPersonFill = styled(BsPersonFill)`
    
`