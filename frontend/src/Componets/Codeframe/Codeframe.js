import './codeframe.css'
import { useState, useEffect } from 'react';
import helloWorld from '../../Data/Code'
import Codeline from './Codeline'
const Codeframe = () => {
    const [lines, setLines] = useState([])
    let codeBlock = helloWorld

    useEffect(() => {
        linesWriter();
    }, []);

    const linesWriter = () => {
        if (codeBlock.length > 0)
            setLines(lines.concat([codeBlock.shift()]))
    }

    const nextLine = () => {
        linesWriter();
    }

    const codeLines = lines.map((line, index) =>
        <Codeline key={index} index={index} value={line} nextLine={nextLine} />
    )

    return (
        <div className="codeframe">
            {codeLines}
        </div>
    );
}


export default Codeframe
