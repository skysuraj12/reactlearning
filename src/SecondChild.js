import { useState } from "react"
import ButtonTwo from "./ButtonTwo"

const SecondChild = props => {
    const { work, depart, group } = props
    console.log('work2', work)
    const [setName, updateName] = useState(work)
    const [setDpt, updateDpr] = useState(depart)
    const [setgrp, updategrp] = useState(group)
    const [st, ch] = useState(false)


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
            <ButtonTwo />
        </>
    )
}

export default SecondChild
