import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const StyleEditor = () => {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [borderColor, setBorderColor] = useState('#000000');
  const [borderRadius, setBorderRadius] = useState('5px');
  const [padding, setPadding] = useState('10px');

  const style = {
    backgroundColor: bgColor,
    color: textColor,
    borderColor: borderColor,
    borderRadius: borderRadius,
    padding: padding,
    borderStyle: 'solid',
    borderWidth: '1px',
  };

  return (
    <div>
      <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} />
      <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} />
      <input type="color" value={borderColor} onChange={e => setBorderColor(e.target.value)} />
      <input type="text" value={borderRadius} onChange={e => setBorderRadius(e.target.value)} placeholder="Border Radius" />
      <input type="text" value={padding} onChange={e => setPadding(e.target.value)} placeholder="Padding" />
      
      <Button label="Button" style={style} />
      <Input type="text" placeholder="Text Input" style={style} />
      <Select options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]} style={style} />
    </div>
  );
};

export default StyleEditor;
