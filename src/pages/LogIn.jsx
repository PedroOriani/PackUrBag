import styled from "styled-components"
import Logo from '../assets/BackPack.png'

export default function LogIn () {
    return (
        <SCLogIn>
            <SCLogo src={Logo} />
        </SCLogIn>
    )
}

const SCLogIn = styled.div`
    width: 100%;
    height: 100%;

    padding: 200px 50px 200px 50px;

    background-color: orangered;
`

const SCLogo = styled.img`
  width: 300px;
  height: 300px;

  margin: auto;
`