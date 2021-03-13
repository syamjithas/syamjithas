import './Batman.scss'
import React from 'react'
import batman from './image/batman.svg'

const Batman = () => {
    return (
        <div className="final_layers">
            <div className="batman-container">
                <div className="textarea">
                    It's not who I am underneath but what I do that defines me.
            </div>
                <div className={"smoke1 img one"}>
                </div>
                <div className={"smoke2 img two"}>
                </div>
                <div className={"smoke3 img three"}>
                </div>
                <div className={"smoke1 img three"}>
                </div>
                <div className={"smoke2 img two"}>
                </div>
                <div className={"smoke3 img one"}>
                </div>
                <div className={"smoke1 img two"}>
                </div>
                <div className={"smoke2 img one"}>
                </div>
                <div className={"smoke3 img three"}>
                </div>
                <img src={batman} className={"tippy top layer"} />
            </div>
        </div>
    )
}

export default Batman
