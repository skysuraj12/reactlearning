import { useState } from "react"
import ButtonThree from "./ButtonThree"
const ButtonTwo = () => {
    const [state, setState] = useState(false)
    const [word, setWord] = useState(false)
// this is nothing just a random commit
// this is nothing just a random commit
    const handleClick = () => {
        setState(!state)
    }

    const clickHandle = () => {
        setWord(!word)

    }

    const clickHandleAlert = () => {
        alert("Your messing with te wrong person")
    }

    return (
        <>
            <div className="work">
                {state ? 'Pravin Raj is my friend' : 'Pravin Raj is my guru'}
            </div>
            <button className="btn1" onClick={handleClick}>Click To Know More About Pravin</button>

            <div className="word">
                {word ? 'lernt some thing in react' : 'need more trainning'}
            </div>

            <button className="btn1" onClick={clickHandle}>Click to check react learning</button>
            <button className="btn1" onClick={clickHandleAlert}>Click to See alert</button>
            <ButtonThree />
        </>
    )
}
export default ButtonTwo




