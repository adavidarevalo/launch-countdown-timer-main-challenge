import React from 'react'
import backgrounFooter from '../source/img/backgrounFooter.svg'
import facebook from '../source/img/facebook.svg'
import instagram from '../source/img/instagram.svg'
import pinterest from '../source/img/pinterest.svg'
import styled from '@emotion/styled'

const Container = styled.footer`
width: 100%;
background-image: url(${backgrounFooter});
min-height: 20vh;
display: flex;
justify-content: center;
align-items: flex-end;
div{
    margin-bottom: 4vh;
    img:nth-of-type(2n){
        margin-inline: 4vh;
    }
}
@media (min-width: 898px){
    position: absolute;
    bottom: 0px;
    div{
        img{
            width: 35px;
        }
    }
}
`


const Footer = () =>(
    <Container>
        <div>
            <img src={facebook} alt='Facebook'/>
            <img src={instagram} alt='Instagram'/>
            <img src={pinterest} alt='Pinterest'/>
        </div>
    </Container>
)

export default Footer