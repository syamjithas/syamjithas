import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Codestring = props => {
    const [codeStr, setCodeStr] = useState("");
    useEffect(() => {
        domWriter();
    });

    const delayFn = (time) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, time)
        })
    }

    const domWriter = async () => {
        for (let i = 0; i <= props.text.length; i++) {
            setCodeStr(props.text.substring(0, i))
            await delayFn(50);
        }
    }

    return (
        <span className={props.class}>
            {codeStr}
        </span>
    )
}


Codestring.defaultProps = {
    text: '',
    class: ''
}

Codestring.propTypes = {
    text: Proptypes.string.isRequired,
    class: Proptypes.string.isRequired
}


export default Codestring
