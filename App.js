import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import * as math from 'mathjs';
const App = () => {

  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const resetInput =() => {
    setText("");
    setResult("");
  }

  const calculateResult = () => {
    const input = text.join(""); //removes comma
    setResult(math.evaluate(input));
  };

  const invertText = () => {
    setText((text) => [text*-1]);
  };

  const buttonColor = "#f2a33c";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="AC" handleClick={resetInput}/>
          <Button symbol="+/-" handleClick={invertText}/>
          <Button symbol="%" handleClick={addToText}/>
          <Button symbol="/" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="*" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="-" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button class="zero" symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" color={buttonColor} handleClick={calculateResult}/>
          
        </div>
      </div>
    </div>
  );
};

export default App;
