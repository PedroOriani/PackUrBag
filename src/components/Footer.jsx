import styled from "styled-components"
import { BsHouseDoor } from "react-icons/bs"
import { BsPersonFill } from "react-icons/bs"

export default function Footer (props) {

    const {page} = props;

    return(
        <SCFooter>
            <SCBsHouseDoor />
            <SCUrTrips>{page}</SCUrTrips>
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

const SCBsHouseDoor = styled(BsHouseDoor)`
    width: 45px;
    height: 55px;

    color: orange;

    border: black;

    &hover{
        transform: scale()
    }
`
const SCUrTrips = styled.p`
    font-size: 35px;
`

const SCBsPersonFill = styled(BsPersonFill)`
    width: 45px;
    height: 55px;

    color: orange;
`