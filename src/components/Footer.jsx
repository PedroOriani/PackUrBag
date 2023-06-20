import styled from "styled-components"

export default function Footer () {
    return(
        <SCFooter>
            <h1>Footer</h1>
        </SCFooter>
    )
}

const SCFooter = styled.div`
    width: 100%;
    height: 70px;

    background-color: green;

    position: fixed;
    bottom: 0;
`