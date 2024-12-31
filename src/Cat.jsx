import { useState } from "react";

function Cat() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleNum1Change = (event) => {
        setNum1(Number(event.target.value)); // Convert input to number
    };

    const handleNum2Change = (event) => {
        setNum2(Number(event.target.value)); // Convert input to number
    };

    const sum = num1 + num2;

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>CLICK</button>

            <div style={{ marginTop: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleInputChange}
                />
                <p>Name: {name}</p>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h2>Arithmetic Calculation</h2>
                <input
                    type="number"
                    placeholder="Enter first number"
                    value={num1}
                    onChange={handleNum1Change}
                />
                <input
                    type="number"
                    placeholder="Enter second number"
                    value={num2}
                    onChange={handleNum2Change}
                    style={{ marginLeft: "10px" }}
                />
                <p style={{ marginTop: "10px" }}>
                    The sum of {num1} and {num2} is: {sum}
                </p>
            </div>
        </div>
    );
}

export default Cat;
