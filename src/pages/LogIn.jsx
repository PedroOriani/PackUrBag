import styled, { keyframes } from "styled-components"
import Logo from '../assets/BackPack.png'
import ResetStyle from '../style/ResetStyle'

export default function LogIn () {
    return (
        <>
        <ResetStyle />
        <SCLogIn>
            <SCDiv>
                <SCLogo src={Logo} />
                <SCTitle>Pack  Ur  Bag</SCTitle>
            </SCDiv>
        </SCLogIn>
        </>
    )
}

const bounce = keyframes`
    to{
        transform: translateY(30px);
    }
`

const SCLogIn = styled.div`
    width: 100%;
    height: 100vh;

    background-color: orange;

    display: flex;
    justify-content: center;
    align-items: center;
`

const SCDiv = styled.div`
    width: 300px;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    animation: ${bounce} 1s alternate infinite;
`

const SCLogo = styled.img`
  width: 150px;
  height: 150px;
`

const SCTitle = styled.p`
    font-size: 30px;
    font-family: 'Exo 2', sans-serif;

    color: white;
`