import { useState, useEffect } from 'react';

const Codeframe = () => {
    const [lines, setLines] = useState([])
    const codeBlock = [
        [
            { class: "mtk1", text: '&nbsp;&nbsp;' },
            { class: "mtk4", text: 'const' },
            { class: "mtk1", text: '&nbsp;' },
            { class: "mtk7", text: "wait" },
            { class: "mtk1", text: '&nbsp;' },
            { class: "mtk10", text: '=' },
            { class: "mtk1", text: '&nbsp;(' },
            { class: "mtk3 mtki", text: 'time' },
            { class: "mtk1", text: ')&nbsp;' },
            { class: "mtk4", text: '=&gt;' },
            { class: "mtk1", text: '&nbsp;{' }],
        [
            { class: "mtk1", text: '&nbsp;&nbsp;&nbsp;&nbsp;' },
            { class: "mtk4", text: 'return' },
            { class: "mtk1", text: '&nbsp;' },
            { class: "mtk4", text: 'new' },
            { class: "mtk1", text: '&nbsp;' },
            { class: "mtk6", text: 'Promise' },
            { class: "mtk1", text: '(' },
            { class: "mtk7 mtki", text: 'resolve' },
            { class: "mtk1", text: '&nbsp;' },
            { class: "mtk4", text: '=&gt;' },
            { class: "mtk1", text: '&nbsp;{' },
        ],
        [
            { class: "mtk1", text: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' },
            { class: "mtk10", text: 'setTimeout' },
            { class: "mtk1", text: '(()&nbsp;' },
            { class: "mtk4", text: '=&gt;' },
            { class: "mtk1", text: '&nbsp;{},' }
        ],
        [
            { class: "mtk1", text: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' },
            { class: "mtk7", text: 'resolve' },
            { class: "mtk1", text: '(' },
            { class: "mtk5", text: 'true' },
            { class: "mtk1", text: ');' }
        ],
        [
            { class: "mtk1", text: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },&nbsp;' },
            { class: "mtk3 mtki", text: 'time' },
            { class: "mtk1", text: ') ' }
        ],
        [
            { class: "mtk1", text: '&nbsp;&nbsp;&nbsp;&nbsp; })' }
        ],
        [
            { class: "mtk1", text: '&nbsp;&nbsp; }' }
        ],
        [],
        [
            { class: "mtk1", text: '&nbsp;&nbsp;' },
            { class: "mtk4", text: 'const' },
            { class: "mtk1", text: '&nbsp;' },
            { class: "mtk7", text: 'helloWorld' },
            { class: "mtk1", text: '&nbsp;' },
            { class: "mtk10", text: '=' },
            { class: "mtk1", text: '&nbsp;' },
            { class: "mtk4", text: 'async' },
            { class: "mtk1", text: '&nbsp; () &nbsp;' },
            { class: "mtk4", text: '= &gt;' },
            { class: "mtk1", text: '&nbsp; {' }
        ],
        [
            { class: "mtk1", text: '&nbsp;&nbsp;&nbsp;&nbsp; ' },
            { class: "mtk4", text: 'await' },
            { class: "mtk1", text: '&nbsp;' },
            { class: "mtk7", text: 'wait' },
            { class: "mtk1", text: '(' },
            { class: "mtk5", text: '500' },
            { class: "mtk1", text: ');' }
        ],
        [
            { class: "mtk1", text: '&nbsp;&nbsp;&nbsp;&nbsp; ' },
            { class: "mtk7", text: 'helloWorld' },
            { class: "mtk1", text: '() ' }
        ],
        [
            { class: "mtk1", text: '&nbsp;&nbsp; ' }
        ]
    ]





    useEffect(() => {
        // Update the document title using the browser API
        domWriter();
    });

    const div = document.createElement('div')
    div.classList.add('left');
    const getRandom = (n) => {
        return Math.floor((Math.random() * n) + 1)
    }

    const delayFn = (time) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, time)
        })
    }
    const domWriter = async () => {
        for (var j = 0; j < getRandom(2); j++)
            for (var i = 0; i < arr.length; i++) {
                await delayFn(500);
                document.querySelector('div.content').innerText = arr[i];
            }
        await delayFn(200);
        document.querySelector('div.content').innerText = "Loading Complated";
        await delayFn(200);

        document.querySelector('div.content').innerText = "";
        await delayFn(200);
        for (var i = 0; i < arr2.length; i++) {
            await delayFn(2000);
            for (var j = 0; j <= arr2[i].length; j++) {
                document.querySelector('div.left').innerText = arr2[i].substring(0, j);
                if (arr2[i][j - 1] == ",") {
                    await delayFn(500);
                }
                await delayFn(50);
            }
        }

    }
    return (
        <div>

        </div>
    )
}


export default Codeframe
