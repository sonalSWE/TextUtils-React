import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log('handleUpClcik is clicked');
        setText(text.toUpperCase());
        props.showAlert('Converted to Upper Case!', 'success');
    }

    const handleLoClick = () => {
        console.log('handleLoClick is clicked');
        setText(text.toLowerCase());
        props.showAlert('Converted to Lower Case!', 'success');
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert('Text Cleared!', 'success');
    }

    const handleOnChange = (event) => {
        console.log('handleOnChange is clicked');
        setText(event.target.value);
    }

    const handleCopy = () => {
        console.log('handleCopy is clicked');
        //var text = document.getElementById("myBox");
        //text.select();
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
        props.showAlert('Copy to Clipboard!', 'success');
    }

    const handleExtraSpace = () => {
        setText(text.split(/[ ]+/));
        props.showAlert('Extra spaces are removed!', 'success');
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}> Convert To UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLoClick}> Convert To LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleClearClick}> Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCopy}> Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleExtraSpace}> Remove Extra Spaces</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1> Your Text Summary </h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length!==0 }).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Nothing to preview'}</p>
            </div>
        </>

        )
}
