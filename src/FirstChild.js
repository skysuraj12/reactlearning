

const FirstChild = props => {
    const { count, name, country, age, run } = props
    console.log('firstchild!!', count, 'name!!', name, 'country!!', country, 'age', age)
    const result = (count % 2 == 0) ? 'even' : 'odd'
    console.log('res', result)
    return (

        <>
            <div className="result">Button Clicked <span className="request1">{result} </span> times </div>
        </>
    )
}

export default FirstChild