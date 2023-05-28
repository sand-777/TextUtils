import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=>{
       
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase","success")
    }
    const handleLowClick = ()=>{
       
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success")
   }
    const handleClearClick = ()=>{
       
      let newText = "";
      setText(newText);
      props.showAlert("Cleared text","success")
   }

   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleCopy = ()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success")
  }

    const handleOnChange = (event)=>{
       
        setText(event.target.value);
     }
    const [text, setText] = useState('');
   
  return (
    <>
<div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1 >{props.heading} </h1>
    <div className="mb-3">

<textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>

        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>

        <button type="submit" onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy</button>


</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h1>Your text summary</h1>
  <p>{text.length>0?text.trim().split(/\s+/).length:0} words, {text.length} characters</p>
  
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
  
</div>
</>
  )
}
