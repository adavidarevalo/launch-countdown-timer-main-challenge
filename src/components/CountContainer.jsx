import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
margin-bottom: 35px;
div{
    width: 180px;
    margin: 0 auto;
    text-align: center;
    min-height: 125px;
    background: linear-gradient(#2C2C44, #33364E); 
    border-radius: 10px;
    box-shadow: 2px 5px 2px 1px rgb(0 0 0 / 20%);
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 4.3rem;
        padding: 0px;
        margin: 0px;
        color: rgb(205,83,115);
        font-weight: 600;
        letter-spacing: 9px;
    }
}
p{
    text-align: center;
    color: rgb(106,104,128);
    font-size: 1.4rem;
    margin: 10px;
    font-weight: 600;
    letter-spacing: 3px;
}
@media (min-width: 898px){
    div{
        margin-inline: 20px;
    }
}
`

const CountContainer = ({counter, title}) =>{
    return(
        <Container>
            <div>
              <p>{counter}</p>
            </div>
            <p>{title}</p>
        </Container>
    )
}

export default CountContainer