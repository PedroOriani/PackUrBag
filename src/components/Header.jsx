import styled from "styled-components"
import Logo from '../assets/BackPack.png'

export default function Header () {
    return(
        <SCHeader>
            <SCLogo src={ Logo } />
        </SCHeader>
    )
}

const SCHeader = styled.div`
    width: 100%;
    height: 70px;

    padding: 5px 15px 5px 15px;

    background-color: green;

    position: fixed;
    top: 0;
`

const SCLogo = styled.img`
  width: 60px;
  height: 60px;

  background-color: none;
`