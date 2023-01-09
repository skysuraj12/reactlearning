import { useContext } from "react"
import { initialName, finalName } from "./App"

const UseContext = () => {
    const myname = useContext(initialName)
    const mylastname = useContext(finalName)
    return (
        <p>My name is {myname} {mylastname}</p>
    )
}
export default UseContext