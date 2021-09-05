import React, {useState, useEffect} from 'react'
import CountContainer from './CountContainer'
import styled from '@emotion/styled'
const Container = styled.div`
div{
    h1{
        text-align: center;
        color: #ecebeb;
        margin: 0px;
        padding-block: 25px 40px;
    }
}
@media (min-width: 898px){
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`
const ContainerMediaQuery = styled.div`
@media (min-width: 898px){
    display: flex;
    justify-content: center;
    aling-items: center;
}
`

const CountDown = () =>{

    const hoursMinSecs = {
        'days': 8,
        'hours': 8,
        'minutes': 0, 
        'seconds': 60
    }
    const { days = 8, hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[day, hrs, mins, secs], setTime] = useState([days, hours, minutes, seconds]);
    
   
        const tick = () => {
   
            if (day === 0 && hrs === 0 && mins === 0 && secs === 0) 
                reset()
            else if(hrs === 0 && mins === 0 && secs === 0){
                setTime([day - 1, 23, 59, 59]);
            }
            else if (mins === 0 && secs === 0) {
                setTime([day, hrs - 1, 59, 59]);
            } else if (secs === 0) {
                setTime([day, hrs, mins - 1, 59]);
            } else {
                setTime([day, hrs, mins, secs - 1]);
            }
        };
    


    const reset = () => setTime([parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    
    return(
        <Container>
            <div>
              <h1>We're Launching Sonn</h1>
              <ContainerMediaQuery>
                  <CountContainer title='DAYS' counter={day}/>
                  <CountContainer title='HOURS' counter={hrs}/>
                  <CountContainer title='MINUTES' counter={mins}/>
                  <CountContainer title='SECONDS' counter={secs}/>
              </ContainerMediaQuery>
            </div>
        </Container>
    )
}

export default CountDown