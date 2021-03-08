import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Codeline = props => {
    const [codeLine, setCodeLine] = useState([])
    useEffect(() => {
        lineWriter();
    })
    const lineWriter = async () => {
        for (let i = 0; i <= props.text.length; i++) {
            setCodeStr(props.text.substring(0, i))
            await delayFn(50);
        }
    }
    return (
        <div>

        </div>
    )
}

Codeline.propTypes = {

}

export default Codeline
