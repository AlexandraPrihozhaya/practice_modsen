import React, {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count+1);
    }

    const btnStyle = {
        backgroundColor: count > 10 ? '#7d0000' : '#007d13',
    }

    return (
        <div className="counter">
            <h2>Счётчик</h2>
            <div>
                <text className="text">{count}</text>
                <button onClick={handleClick} style={btnStyle} className="btn">+</button>
            </div>
        </div>
    );
};

export default Counter;