import './Landing.scss'
import logo from '../../Resources/logo_blue_black.svg'
import Codeframe from '../../Componets/Codeframe/Codeframe'
import { useState } from 'react'
const Landing = () => {
    const [landingClass, setlandingClass] = useState("")
    const initHelloWorld = () => {
        setlandingClass('fade-in')
    }
    return (
        <div className='landing-container'>
            <div className='landing-flexbox'>
                <Codeframe initHelloWorld={initHelloWorld} />
            </div>
            <div className='landing-flexbox'>
                <img className={`svg-logo ${landingClass}`} src={logo} />
            </div>

        </div>
    )
}


export default Landing
