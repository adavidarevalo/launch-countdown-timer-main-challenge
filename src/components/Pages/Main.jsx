import React, {useState} from 'react'
import styled from '@emotion/styled'
import CountDown from '../CountDonw'
import Footer from '../Footer'
import stars from '../../source/img/stars.svg'
import Form from '../Form'

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
    const [FormContainer, setFormContainer] = useState(false)
    const [hoursMinSecs, setHoursMinSecs] = useState({
        'days': 8,
        'hours': 8,
        'minutes': 0, 
        'seconds': 60
    }) 
    console.log('FormContainer ', FormContainer)
    return(
        <Container>
            <ContainerStart>
                {FormContainer
                ?<CountDown hoursMinSecs={hoursMinSecs}/>
                :<Form 
                hoursMinSecs={hoursMinSecs} 
                setHoursMinSecs={setHoursMinSecs}
                setFormContainer={setFormContainer}
                /> 
                }
              <Footer/>
            </ContainerStart>
        </Container>
    )
}


export default Main