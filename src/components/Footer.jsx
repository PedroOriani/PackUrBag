import styled from "styled-components"
import { BsHouseDoor } from "react-icons/bs"
import { BsPerson } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

export default function Footer (props) {

    const {page} = props;

    const navigate = useNavigate()

    function myTrips(){
        navigate('/homepage')
    }

    function profile(){
        navigate('/profile')
    }

    return(
        <SCFooter>
            <SCBsHouseDoor onClick={myTrips}/>
            <SCUrTrips>{page}</SCUrTrips>
            <SCBsPerson onClick={profile}/>
        </SCFooter>
    )
}

const SCFooter = styled.div`
    width: 100%;
    height: 70px;

    padding: 15px 15px 15px 15px;

    position: fixed;
    bottom: 0;

    background-color: orange;

    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index:10;

    box-shadow: 2px -50px 150px 2px orange;
`

const SCBsHouseDoor = styled(BsHouseDoor)`
    width: 45px;
    height: 55px;

    color: #392620;

    &:hover{
        transform: scale(1.1);  
    }
`
const SCUrTrips = styled.p`
    font-size: 35px;

    font-family: 'Exo 2', sans-serif;

    color: #392620;
`

const SCBsPerson = styled(BsPerson)`
    width: 45px;
    height: 55px;

    color: #392620;
`

  