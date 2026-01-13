
import React, { useState } from 'react';

const CalculatorApp: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState('');

  const buttons = [
    ['C', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  const handlePress = (btn: string) => {
    if (btn === 'C') {
      setDisplay('0');
      setPrev('');
    } else if (btn === '=') {
      try {
        const expression = display.replace('×', '*').replace('÷', '/');
        // Simple safety check for eval
        if (/^[0-9+\-*/.() ]+$/.test(expression)) {
            const res = eval(expression);
            setPrev(display + ' =');
            setDisplay(String(res).slice(0, 10));
        }
      } catch {
        setDisplay('Error');
      }
    } else if (btn === '+/-') {
        setDisplay(prev => prev.startsWith('-') ? prev.slice(1) : '-' + prev);
    } else if (btn === '%') {
        setDisplay(prev => String(parseFloat(prev) / 100));
    } else {
      setDisplay(prev => (prev === '0' || prev === 'Error') ? btn : prev + btn);
    }
  };

  return (
    <div className="flex-1 bg-black flex flex-col pb-8">
      <div className="flex-1 flex flex-col justify-end items-end px-8 py-4 space-y-1">
        <span className="text-neutral-500 text-xl font-medium h-8">{prev}</span>
        <span className="text-7xl font-light text-white overflow-hidden whitespace-nowrap tracking-tight">
          {display}
        </span>
      </div>
      
      <div className="px-5 grid grid-cols-4 gap-3">
        {buttons.flat().map((btn) => {
          const isOperator = ['÷', '×', '-', '+', '='].includes(btn);
          const isSpecial = ['C', '+/-', '%'].includes(btn);
          const isZero = btn === '0';
          
          return (
            <button 
              key={btn} 
              onClick={() => handlePress(btn)}
              className={`h-[72px] rounded-full flex items-center justify-center text-3xl font-medium transition duration-150 active:brightness-125 ${
                isOperator ? 'bg-orange-500 text-white' :
                isSpecial ? 'bg-neutral-300 text-black' :
                'bg-neutral-800 text-white'
              } ${isZero ? 'col-span-2 px-8 justify-start' : ''}`}
            >
              <span className={isZero ? 'ml-2' : ''}>{btn}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalculatorApp;
