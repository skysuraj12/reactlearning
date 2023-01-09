import { useState } from "react";



const ChangeText = () => {

    const [initialCss, setCss] = useState(false)

    const clickToChange = () => {
        // alert('this is to change css')
        setCss(!initialCss)
    }
    const cssCheck = initialCss ? "work" : "work2"
    return (
        <>
            <p className={cssCheck}>I am still learning React Js</p>
            <button className="btn1" onClick={clickToChange}>Change Css of Text</button>
        </>
    )
}

export default ChangeText