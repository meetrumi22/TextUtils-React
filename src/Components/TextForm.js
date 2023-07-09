import React, { useState } from 'react'

const TextForm = (props) => {

    const [text, setText] = useState("Enter text here")

    const upperCaseHandler = () => {

        let upperText = text.toUpperCase();

        setText(upperText)

        props.showAlert("Text Converted into UpperCase","success")
    }

    const lowerCaseHandler = () => {

        let upperText = text.toLowerCase();

        setText(upperText)
        props.showAlert("Text Converted into LowerCase","success")
    }

    const clearTextHandler = () => {

        setText(" ");
        props.showAlert("Text is Empty","success")
    }


    const changeHandler = (event) => {

        setText(event.target.value)
    }

    return (
        <>
            <div className={`container color-${props.mode} bg-${props.mode} mt-4`}>

                <h1 className={`text-${props.mode === 'dark'?"light":"dark"}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark'?"light":"dark"}`} id="myBox"  value={text} onChange={changeHandler} rows="8"></textarea>
                </div>

                <button className='btn btn-primary' onClick={upperCaseHandler}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={lowerCaseHandler}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={clearTextHandler}>ClearText</button>

            </div>
            <div className={`container mt-4 text-${props.mode === "dark"?"light":"dark"}`}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} Words</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>{text.length === 0?"Please Enter Text To Preview":"Preview"}</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
