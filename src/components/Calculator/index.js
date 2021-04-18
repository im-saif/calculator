import React, { useState } from 'react'
import {Container , Screen, Previous, Current, Button} from "./Styled"


const Calculator = () => {

    const [current, setCurrent] = useState("")
    const [previous, setPrevious] = useState("")
    const [operation, setOperation] = useState("")

    const appendValue = (el) => {
        const value = el.target.getAttribute('data')
        if(value === "." && String(current).includes('.')) return 
        if (operation === " =" && (value !== "AC" || value !== "DEL")){
            setPrevious('')
            setOperation('')
            setCurrent(value)
        }
        else{
        setCurrent(current + value)}
    }

    const handleDelete = () => {
        setCurrent(String(current).slice(0, -1))
    }

    const handleClear = () => {
        setCurrent("")
        setPrevious("")
        setOperation("")
    }

    const chooseOperation = (el) => {
       if (current === "")return 
       const op = el.target.getAttribute('data')
       
       if (previous !== ""){
           let value = compute()
           setPrevious(value)
       }
       else{
           setPrevious(current)
       }
       setCurrent('')
       setOperation(op)
    }

    const compute = () => {
       let result
       let previousNumber = parseFloat(previous)
       let currentNumber = parseFloat(current)
       if (isNaN(previousNumber) || isNaN(currentNumber)) return 
       switch(operation){
            case "÷":
               result = previousNumber / currentNumber
               break
            case "×":
                result = previousNumber * currentNumber
                break
            case "+":
                result = previousNumber + currentNumber
                break
            case "-": 
                result = previousNumber - currentNumber
                break
            default:
                return
       }
       return result
    }

    function roundToNine(num) {    
        return +(Math.round(num + "e+9")  + "e-9");
    }

    const equals = () => {
        let value = compute()
        if (value == undefined || value == null) return 
        setPrevious(previous + " " + operation + " " + current)
        setOperation(' =')
        setCurrent(roundToNine(value))
        
    }

    return (
        <Container> 
            <Screen>
                <Previous>{previous} {operation}</Previous>
                <Current>{current}</Current>
            </Screen>
            <Button gridSpan={2} control onClick={handleClear}>AC</Button>
            <Button control onClick={handleDelete}>DEL</Button>
            <Button data={"÷"} operation onClick={chooseOperation}>÷</Button>
            <Button data={"7"} onClick={appendValue}>7</Button>
            <Button data={"8"} onClick={appendValue}>8</Button>
            <Button data={"9"} onClick={appendValue}>9</Button>
            <Button data={"×"} operation onClick={chooseOperation}>×</Button>
            <Button data={"4"} onClick={appendValue}>4</Button>
            <Button data={"5"} onClick={appendValue}>5</Button>
            <Button data={"6"} onClick={appendValue}>6</Button>
            <Button data={"+"} operation onClick={chooseOperation}>+</Button>
            <Button data={"1"} onClick={appendValue}>1</Button>
            <Button data={"2"} onClick={appendValue}>2</Button>
            <Button data={"3"} onClick={appendValue}>3</Button>
            <Button data={"-"} operation onClick={chooseOperation}>-</Button>
            <Button data={"."} point onClick={appendValue}>.</Button>
            <Button data={"0"} onClick={appendValue}>0</Button>
            <Button gridSpan={2} equals onClick={equals} >=</Button>
        </Container>
    )
}

export default Calculator;
