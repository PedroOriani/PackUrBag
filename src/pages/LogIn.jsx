import styled, { keyframes } from "styled-components"
import Logo from '../assets/BackPack.png'
import ResetStyle from '../style/ResetStyle'
import { useNavigate } from "react-router-dom";

export default function LogIn(props) {

    const {name, setName} = props;

    console.log(name)
    
    const navigate = useNavigate();

    function LogIn(){
        navigate('/homepage')
    }

    return (
        <>
        <ResetStyle />
        <SCLogIn>
            <SCCOntainer>
                <SCDiv>
                    <SCLogo src={Logo} />
                    <SCTitle>Pack  Ur  Bag</SCTitle>
                </SCDiv>
                <SCInput>
                    <SCName 
                    type="text" 
                    placeholder="How would you like to be called?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ></SCName>
                    <SCSubmit type="submit" onClick={LogIn} value='Entrar'></SCSubmit>
                </SCInput>
            </SCCOntainer>
        </SCLogIn>
        </>
    )
}

const bounce = keyframes`
    to{
        transform: translateY(-30px);
    }
`

// const rotate = keyframes`
//     0%{
//         transform:rotateY(0)
//     }
    
//     100%{
//         transform:rotateY(360deg)
//     }
// `

const SCLogIn = styled.div`
    width: 100%;
    height: 100vh;

    background-color: orange;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
`

const SCCOntainer = styled.div`
    width: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const SCDiv = styled.div`
    width: 300px;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    animation: ${bounce} 1s alternate infinite;
    //rotate 0.5s linear 4.5s 3;
`

const SCLogo = styled.img`
  width: 150px;
  height: 150px;
`

const SCTitle = styled.p`
    font-size: 30px;
    font-family: 'Exo 2', sans-serif;

    color: #392620;
`
const SCInput = styled.div`
    width: 250px;

    margin-top: 30px;

    display: flex;
    flex-wrap: wrap;

    position: relative;
`

const SCLabel = styled.label`
    font-size: 20px;
    font-weight: bold;

    margin-left: 10px;

    color: #392620;
`
const SCName = styled.input`
    width: 100%;
    height: 30px;

    margin: 10px;

    background-color: #d7d7d7;

    border-radius: 4px;
    border: 1px solid #392620;

    text-align: center;

    font-family: 'Exo 2', sans-serif;
    color: #392620;
`
const SCSubmit = styled.input`
    width: 70px;
    height: 30px;

    background-color: #d7d7d7;

    border-radius: 4px;
    border: 1px solid #392620;

    position: absolute;
    left: 90px;
    top: 70px;

    color: #392620;
    font-family: 'Exo 2', sans-serif;
    font-weight: bold;
`