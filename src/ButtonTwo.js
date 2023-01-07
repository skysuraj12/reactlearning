import { useState } from "react"

const ButtonTwo = () => {
    const [state, setState] = useState(false)
    const [word, setWord] = useState(false)

    const handleClick = () => {
        setState(!state)
    }

    const clickHandle = () => {
        setWord(!word)
    }

    return (
        <>
            <div className="work">
                {state ? 'Pravin Raj is my friend' : 'Pravin Raj is my guru'}
            </div>
            <button className="btn1" onClick={handleClick}>Click To Know More About Pravin</button>

            <div className="word">
                {word ? 'Pravin Raj is my friend' : 'Pravin Raj is my guru'}
            </div>
            <button className="btn1" onClick={clickHandle}>Random Click</button>
        </>
    )
}
export default ButtonTwo