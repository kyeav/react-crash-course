import React, { useState } from "react"

function Counter() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [ ...prevArr, "+"])
    }

    function addMinus() {
        setArr([])
    }

    return (
        <>
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div>
        </>
    )
}

function Counter() {
    const [cart, setCart] = useState({
        item: "apple",
        quantity: 0,
    })

    function addApple() {
        // use a callback to get the previous value
        // spread out all the properties of the prev state
        // only change the property that you need to change
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }

    function removeApple() {
        setCart((prevCart) => ({
            ...prevCart,
            quantity: prevCart.quantity - 1,
        }))
    }

    return (
        <>
            <button onClick={removeApple}>-</button>
            {cart.quantity}
            {cart.item}
            <button onClick={addApple}>+</button>
        </>
    )
}


function Counter() {
    const [counter, setCounter] = useState(0)

    // function incrementCounter() {
    //     setCounter(counter + 1)
    // }

    // function decrementCounter() {
    //     setCounter(counter - 1)
    // }

    // best practice 
    function incrementCounter() {
        setCounter((prevCounter) => prevCounter + 1)
    }

    function decrementCounter() {
        setCounter((prevCounter) => prevCounter - 1)
    }

    return (
        <>
        <button onClick={decrementCounter}>-</button>
        {/* onClick={() => setCounter(counter - 1)} */}
        {counter}
        <button onClick={incrementCounter}>+</button>
        </>
    )
}

export default Counter