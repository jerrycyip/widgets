import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Chinese (Simplified)',
        value: 'zh-CN'
    },
    {
        label: 'Chinese (Traditional)',
        value: 'zh-TW'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div style={{margin:"1em"}}>
            <div  className="ui form">
                <div className="field">
                    <label><h4>Enter Text</h4></label>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            </div>
            <br />
            <Dropdown
            label="Select a Language" 
            selected={language}
            onSelectedChange={setLanguage}
            options={options}
            />
            <br />
            <hr />
            <h4  className="ui header">Output</h4>
            <Convert text={text} language={language} />
        </div>

    );
};

export default Translate;