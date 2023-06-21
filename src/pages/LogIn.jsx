import styled from "styled-components"
import Logo from '../assets/BackPack.png'
import ResetStyle from '../style/ResetStyle'

export default function LogIn () {
    return (
        <>
        <ResetStyle />
        <SCLogIn>
            <SCLogo src={Logo} />
            <SCTitle>pack ur bag</SCTitle>
        </SCLogIn>
        </>
    )
}

const SCLogIn = styled.div`
    width: 100%;
    height: 100vh;

    background-color: orange;
    padding: 200px 40px 200px 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const SCLogo = styled.img`
  width: 150px;
  height: 150px;
`

const SCTitle = styled.p`
    margin-top: 30px;
    font-size: 40px;
    font-family: 'Exo 2', sans-serif;
`