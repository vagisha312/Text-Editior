import React from 'react'
import  {useState} from 'react'

export default function Textform(props) {
  const [text,setText] = useState('');


  const handelupclick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase!","success");
  }


  const handeldownclick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!","success");
  }


  const handelchange=(event)=>{
    
    setText(event.target.value);
  }
  

  return (
    <>
    <div className="container" style={{color : props.mode==='dark'? 'white':'black'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" value = {text} rows="8" onChange={handelchange} style={{backgroundColor : props.mode==='dark'? 'grey':'white' , color : props.mode==='dark'? 'white':'black;' }}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handelupclick}>Convert to uppercase</button>
   
    
    <button className="btn btn-primary mx-2" onClick={handeldownclick}>Convert to lowercase</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'? 'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length }Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>
    </>
  )
}
