import React from 'react';
import logo from '../../Resources/logo_blue_black.svg'
import './HelloWorld.scss'
const HelloWorld = (props) => {
    return (
        <>
            <div className={`text-div ${props.landingClass.text}`}>Hello World !</div>
            <img className={`svg-logo ${props.landingClass.logo}`} src={logo} />
        </>
    )
}

export default HelloWorld

