import './Landing.scss'
import Codeframe from '../../Componets/Codeframe/Codeframe'
import HelloWorld from '../../Componets/HelloWorld/HelloWorld'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Landing = () => {
    const [landingClass, setlandingClass] = useState({})
    const initHelloWorld = () => {
        setlandingClass({ logo: 'fade-in', text: 'zoom-in' })
    }
    return (
        <div className='landing-container'>
            <div className='landing-flexbox'>
                <Codeframe initHelloWorld={initHelloWorld} />
            </div>
            <div className='landing-flexbox text-center'>
                <HelloWorld landingClass={landingClass} />
            </div>
            <Link  className="know-more" to='/Batman'>
                
            </Link>
        </div>
    )
}


export default Landing
