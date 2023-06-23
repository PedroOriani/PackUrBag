import styled from "styled-components"
import Logo from '../assets/BackPack.png'
import { BsFillAirplaneFill } from 'react-icons/bs'
import { TbPlaneDeparture } from 'react-icons/tb'
import { FaLuggageCart } from 'react-icons/fa'
import { TbLuggage } from 'react-icons/tb'
import { GiSchoolBag } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import { FaUmbrellaBeach } from 'react-icons/fa'

export default function Header(props) {

    const {name} = props;

    return(
        <SCHeader>
            <SCLogo src={ Logo } />
            <SCProfile>
                <SCName>Welcome, {name}!</SCName>
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

    box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
`

const SCLogo = styled.img`
  width: 60px;
  height: 60px;

  background-color: none;
`

const SCProfile = styled.div`
    width: 100%;

    margin-right: 15px;

    display: flex;
    justify-content: right;
    align-items: center;
    font-family: 'Exo 2', sans-serif;
`

const SCName = styled.p`
    font-size: 25px;
    font-weight: bold;

    color: #392620;

    font-family: 'Exo 2', sans-serif;
`

const SCTbLuggage = styled(TbLuggage)`
    width: 40px;
    height: 40px;

    color: #392620;
`