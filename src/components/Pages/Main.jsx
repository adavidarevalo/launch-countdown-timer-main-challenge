import React from 'react'
import styled from '@emotion/styled'
import CountDown from '../CountDonw'
import Footer from '../Footer'
import stars from '../../source/img/stars.svg'

const Container = styled.div`
background: linear-gradient(hsl(234, 17%, 12%), hsl(235, 16%, 14%), hsl(236, 21%, 26%));
width: 100%;
min-height: 100vh;
height: 100%;
`
const ContainerStart = styled.div`
background-image: url(${stars});
`

const Main = () =>{
    const date = {
        'hours': 8,
        'minutes': 0, 
        'seconds': 60
    }
    console.log('date ', date)
    return(
        <Container>
            <ContainerStart>
              <CountDown hoursMinSec={date}/>
              <Footer/>
            </ContainerStart>
        </Container>
    )
}


export default Main