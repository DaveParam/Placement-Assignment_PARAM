import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = e => {
    const value = e.target.value;

    if (value === '=') {
      try {
        setResult(eval(result));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" value={result} readOnly />
      <div className="buttons">
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="+" onClick={handleClick}>+</button><br></br>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button><br></br>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="*" onClick={handleClick}>*</button><br></br>
        <button value="0" onClick={handleClick}>0</button>
        <button value="." onClick={handleClick}>.</button>
        <button value="=" onClick={handleClick}>=</button>
        <button value="/" onClick={handleClick}>/</button><br></br>
        <button value="C" onClick={handleClick}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
