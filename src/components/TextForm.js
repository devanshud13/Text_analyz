import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("You Text Is Successfully Converted to Uppercase","Success");
    }
    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("You Text Is Successfully Converted to Lowercase","Success");
    }
    const handleClear = () => {
        setText("");
        props.showAlert("You Text Is cleared","Success");
    }
    const handleCopy = () => {
        var copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied To Clipboard","Success");
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces removed Successfully","Success");
    }
    const handleOnChange = (event) => {
        console.log("key pressed");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container ">
                <h1 className={`text-${props.darktext}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.darktext} bg-${props.mode}`}id="exampleFormControlTextarea1" rows="13" value={text} onChange={handleOnChange} placeholder ="Enter your text"></textarea>
                </div>
                <button className={`btn btn-${props.darktext} text-${props.mode} my-3 me-3`} onClick={handleUpClick}>Convert to upper case</button>
                <button className={`btn btn-${props.darktext} text-${props.mode} my-3 me-3`} onClick={handleLowClick}>Convert to lower case</button>
                <button className={`btn btn-${props.darktext} text-${props.mode} my-3 me-3`} onClick={handleClear}>Clear</button>
                <button className={`btn btn-${props.darktext} text-${props.mode} my-3 me-3`} onClick={handleCopy}>Copy</button>
                <button className={`btn btn-${props.darktext} text-${props.mode} my-3 me-3`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className={`text-${props.darktext} container my-3`}>
                <h2>You Text Summary</h2>
                <p>{text.split(" ").length - 1} words and  {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
                <h3>your paragraph takes {0.008 * text.split(" ").length}sec time to read</h3>
            </div>
        </>

    )
}
