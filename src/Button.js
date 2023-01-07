import { useState } from "react";

const Button = () => {
    const [btnState, setBtnState] = useState(false)

    const handleClick = () => {
        setBtnState(btnState => !btnState)
    }
    console.log('btn', btnState)
    const toogleClassCheck = btnState ? ' result' : null
    return (
        <button
            className={`toogle${toogleClassCheck}`}
            onClick={handleClick}
        >Toogle</button>
    )
}

export default Button