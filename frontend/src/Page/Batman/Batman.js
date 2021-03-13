import './Batman.scss'
import React from 'react'
import smoke1 from './image/1.png'
import smoke2 from './image/2.png'
import smoke3 from './image/3.png'
import batman from './image/batman.svg'

const Batman = () => {
    return (
        <div className="final_layers">
            <div className="batman-container">
                <div className="textarea">
                    It's not who I am underneath but what I do that defines me.
            </div>
                <img src={smoke1} className={"mid img one"} />
                <img src={smoke2} className={"top img two"} />
                <img src={smoke3} className={"top2 img three"} />
                <img src={batman} className={"tippy top layer"} />
            </div>
        </div>
    )
}

export default Batman
