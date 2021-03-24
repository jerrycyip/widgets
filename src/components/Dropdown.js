import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            
            setOpen(false);
        };
        // not needed if return statement included: capture: true
        document.body.addEventListener('click', onBodyClick/*, { capture: true }*/);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    },[]);

    const renderedOptions = options.map((option) => {
    if (option.value === selected.value){
        return null;
    }
        
    return (
      <div 
      key={option.value} 
      className="item"
      onClick={()=>onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div>
    <div ref={ref} style={{marginLeft:"1em", marginRight:"1em"}} className="ui form">
      <div className="field">
        <label className="label"><h4>Select a Color</h4></label>
        <div 
        onClick={()=>setOpen(!open)}
        className={`ui selection dropdown ${open ? 'visible active' : '' }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
    <p style={{color: selected.value, margin:"1.5em"}}>This text is {selected.value}</p>
    </div>
  );
};

export default Dropdown;
