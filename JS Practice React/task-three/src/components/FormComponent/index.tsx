import React, { useState } from 'react';

const FormComponent = () => {

    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Введенное значение:", text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='block'>
                <input value={text} className="input" type="text" onChange={(e) => setText(e.target.value)}></input>
                <button type='submit' className='btn'>Вывести в консоль</button>
            </div>
        </form>
    );
}

export default FormComponent;