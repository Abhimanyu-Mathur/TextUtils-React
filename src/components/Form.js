import React, {useState} from 'react'
import PropTypes from 'prop-types';



export default function Form(props) {

    const [text, setText] = useState('');

     let numberOfWords = 0;

    const changetoUppercase = () =>{
       // let newText = text.toUpperCase
        setText(text.toUpperCase());
        props.showAlert("Text converted to UpperCase", "success")
    }

    const handleOnChange = (event) =>{
        // It will append the changes to the old value present in the textarea.
        setText(event.target.value);

        // if(text === ''){
        //   numberOfWords = 0;
        // }
        // else{
        //   numberOfWords = text.split('').length;
        // }

    }

    let changetoLowercase = ()=> {
      setText(text.toLowerCase())
      props.showAlert("Text converted to LowerCase", "success")
    }

    let cleartheTextarea = ()=> {
      setText('');
      props.showAlert("Text area cleaned", "success")
    }

    let countWords = ()=>{
      if(text === ''){
       numberOfWords = 0;
      }
      else{
       numberOfWords = text.split(' ').length;
      }
      return numberOfWords
    }

    // const textboxStyle = {backgroundColor: props.mode === 'dark'?'#1f2247':'white' || props.redMode === 'red'?'#f54284':'white',
    // color: (props.mode === 'dark'?'white':'black' || props.redMode === 'red'?'white':'black') }


  return (
    <div className='container' style={{color: props.mode === 'dark'?'white':'black' || props.redMode === 'notred'?'black':'white' }}>

    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#00E5FF':'white' && props.redMode === 'red'?'#f54284':'white'
    && props.greenMode === 'green'?'#00A86B':'white', 
    color: props.mode === 'dark'?'white':'black' && props.redMode === 'red'?'white':'black' && props.greenMode === 'green'?'white':'black'}} 
    id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>

    <button className='btn btn-primary mx-1' onClick={changetoUppercase}> Convert to Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={changetoLowercase}> Convert to Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={cleartheTextarea}> Clear</button>

    <div className="container mt-3">
      <p>
       {countWords()} words and {text.length} characters
      </p>
    </div>

    </div>

  )
}

Form.propTypes = {
    title: PropTypes.string.isRequired

}

Form.defaultProps = {
    title: 'Enter Text Here'
}
