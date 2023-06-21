import styled from "styled-components"
import { BsHouseDoorFill } from "react-icons/bs"
import { BsPersonFill } from "react-icons/bs"

export default function Footer () {
    return(
        <SCFooter>
            <SCBsHouseDoorFill />
            <SCUrTrips>This Page</SCUrTrips>
            <SCBsPersonFill />
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

    box-shadow: 2px 2px 2px 3px rgb(0, 0, 0, 0.2);
`

const SCBsHouseDoorFill = styled(BsHouseDoorFill)`
    width: 45px;
    height: 55px;
`
const SCUrTrips = styled.p`
    font-size: 35px;
`

const SCBsPersonFill = styled(BsPersonFill)`
    width: 45px;
    height: 55px;
`