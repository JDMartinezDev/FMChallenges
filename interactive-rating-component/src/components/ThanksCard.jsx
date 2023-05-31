import thanksImg from '../../public/illustration-thank-you.svg'

export const ThanskCard = ({grade}) =>{
    return (
        <div className='thanksCard'>
        <img alt='Grade submited' src={thanksImg}></img>
        <p id='result'>You selected {grade} out of 5</p>
        <div className='regards'>
          <h2>Thank you!</h2>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
        </div>
      </div>
    )
}