import { useEffect, useState } from "react";

import DataFetching from "./DataFetching";

const ButtonThree = () => {

    const [count, setCounter] = useState(0)
    const [data, setData] = useState("Ram")

    const updateCount = () => {
        setCounter(count + 1)
    }

    const updateData = () => {
        setData('Sita')
    }

    useEffect(() => {
        console.log('this is updated')
    }, [data])
    return (
        <>
            <h1>Button clicked <span className="request">{count}</span> times </h1>
            <button onClick={updateCount} className="btn1">Click To Count</button>
            <button onClick={updateData} className="btn1">Update data</button>
            <DataFetching />
        </>
    )
}

export default ButtonThree