import React from 'react'
import styled from 'styled-components'

const Order = () => {
  //alert(innerWidth)
  return (
    <Wrapper className='footer1-footer1 thq-section-padding'>
      <div className='footer1-max-width thq-section-max-width'>
        <iframe className="prod" src="https://hop.clickbank.net/?custom=1&affiliate=miui8700&vendor=cognicare&pid=new" alt="https://hop.clickbank.net/?custom=1&affiliate=miui8700&vendor=cognicare&pid=new" scrolling="no">
        </iframe>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.prod{
width:100%;
height:150svw;
margin-top:-10svw;
}
@media (max-width: 990px){
div .prod{
height:390vh;
margin-top:-80svw;
}
}
@media (max-width: 780px){
div .prod{
height:520vh;
margin-top:-170svw;
}
}
`

export default Order