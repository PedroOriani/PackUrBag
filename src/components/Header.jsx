import styled from "styled-components"
import Logo from '../assets/BackPack.png'
import { BsFillAirplaneFill } from 'react-icons/bs'
import { TbPlaneDeparture } from 'react-icons/tb'
import { FaLuggageCart } from 'react-icons/fa'
import { TbLuggage } from 'react-icons/tb'
import { GiSchoolBag } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import { FaUmbrellaBeach } from 'react-icons/fa'

export default function Header () {
    return(
        <SCHeader>
            <SCLogo src={ Logo } />
            <SCTitle>Pack Ur Bag</SCTitle>
            <SCProfile>
                <SCTbLuggage />
            </SCProfile>
        </SCHeader>
    )
}

const SCHeader = styled.div`
    width: 100%;
    height: 70px;

    padding: 5px 15px 5px 15px;

    background-color: orange;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;

    z-index:10;

    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

const SCLogo = styled.img`
  width: 60px;
  height: 60px;

  background-color: none;
`

const SCTitle = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: black;
`

const SCProfile = styled.div`
    width: 60px;
    height: 60px;
    
    border-radius: 50%;
    border: 1px solid black;

    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`

const SCTbLuggage = styled(TbLuggage)`
    width: 40px;
    height: 40px;

    color: orange;
`