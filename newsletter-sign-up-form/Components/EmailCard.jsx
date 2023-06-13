import illustrationSignUpDsktp from '../assets/images/illustration-sign-up-desktop.svg'
import illustrationSignUpMobile from '../assets/images/illustration-sign-up-mobile.svg'
import bullet from '../assets/images/icon-list.svg'
import { useGlobalContext } from '../context'
let list = ["Prodcut discovery and building what mattters", "Measuring to ensure updates are a success", "And much more!"]

const isEmailValid = (email) => {
    let regex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
    console.log(email)
    return regex.test(email)
}

export const EmailCard = () => {
    const { email, windowWidth, isValidEmail, handleChange, handleSubmit} = useGlobalContext()

    return (
        <div className="card">
            <section className="form">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    {list.map((element, index) => {
                        return <li key={index}><img src={bullet}></img>&nbsp;&nbsp;{element}</li>
                    })}
                </ul>
                <form className='emailForm' onSubmit={e => handleSubmit(e)}>
                    <div className='emailFormControl'>
                        <label>Email address <span className={isValidEmail ? "validEmailTag":"invalidEmailTag"}>Valid mail required</span></label>
                        <input type="email" placeholder="email@company.com" value={email} onChange={e => handleChange(e.currentTarget.value)}></input>
                    </div>
                    <button type="submit" disabled={!isValidEmail || email === ""}> Suscribe to monthly newsletter</button>
                </form> 
            </section>
            <section className='cardImage'>
                <img src={windowWidth >= 900 ? illustrationSignUpDsktp : illustrationSignUpMobile} alt='form image'/>
            </section>
        </div>
    )
}