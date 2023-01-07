import { useState } from "react"
import ButtonTwo from "./ButtonTwo"

const SecondChild = props => {
    const { work, depart, group } = props
    console.log('work2', work)
    const [setName, updateName] = useState(work)
    const [setDpt, updateDpr] = useState(depart)
    const [setgrp, updategrp] = useState(group)

    const openNewTab = () => {
        setTimeout(function () {
            window.open('https://google.com') //this by default opens a new window
        }, 1000);
    }

    const handleClick = () => {
        updateName('WellsFargo')
        updateDpr('Computer Engineer')
        updategrp('CRMS-6')
    }
    return (
        <>
            <div className="work">
                i work in {setName} as {setDpt} in {setgrp}
            </div>
            <button className="btn1" onClick={handleClick}>click to change work</button>
            <button className="btn1" onClick={event => window.location.href = 'https://www.google.com/'}>Click To open Google</button>
            <button className="btn1" onClick={event => window.location.replace('https://codefrontend.com')}>Click To replace the page</button>
            <button className="btn1" onClick={openNewTab}>Click To open in new tab</button>
            <ButtonTwo />
        </>
    )
}

export default SecondChild

