import React from 'react'
import styled from '@emotion/styled'


const Container = styled.section`
display: flex;
justify-content: center;
align-items: center;
min-height: 80vh;
form{
    h2{
        text-align: center;
        color: white;
        letter-spacing: 3px;
    }
    div{
        margin-bottom: 15px;
        label{
            display: block;
            color: rgb(106,104,128);
            margin-bottom: 5px;
            font-size: 1rem;
            letter-spacing: 2px;
            
        }
        input{
            width: 100%;
            border-radius: 3px;
            border: none;
            padding: 5px;
            outline: none;
        }
    }
}
`

const ButtonInput = styled.input`
    background: rgb(205,83,115);
    border: none;
    padding: 10px 50px;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 3px;
    color: white;
    border-radius: 3px;
    margin-top: 30px;
`


const Form = ({hoursMinSecs, setHoursMinSecs, setFormContainer}) =>{
    const handleChange = e => {
        setHoursMinSecs({
            ...hoursMinSecs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault()
        setFormContainer(true)
    }
    const {days, hours, minutes, seconds} = hoursMinSecs
    return(
        <Container>
            <form>
                <h2>Complete the Form</h2>
                <div>
                  <label>Days</label>
                  <input 
                  type='number' 
                  placeholder='Days'
                  name='days'
                  value={days}
                  onChange={(e)=>handleChange(e)}
                  />
                </div>
                <div>
                  <label>Hours</label>
                  <input 
                  type='number' 
                  placeholder='Hours'
                  name='hours'
                  value={hours}
                  onChange={(e)=>handleChange(e)}
                  />
                </div>
                <div>
                  <label>Minutes</label>
                  <input 
                  type='number' 
                  placeholder='Minutes'
                  name='minutes'
                  value={minutes}
                  onChange={(e)=>handleChange(e)}
                  />
                </div>
                <div>
                  <label>Seconds</label>
                  <input 
                  type='number' 
                  placeholder='Seconds'
                  name='seconds'
                  value={seconds}
                  onChange={(e)=>handleChange(e)}
                  />
                </div>
                <div>
                  <ButtonInput 
                    type="submit"
                    onClick={(e)=>handleSubmit(e)}
                    value='Send'
                    />
                </div>
            </form>
        </Container>
    )
}

export default Form