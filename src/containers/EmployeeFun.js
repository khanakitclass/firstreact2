import React, { useState } from 'react';

function EmployeeFun(props) {
    // Hooks: useState()
    const [name, setName] = useState('amit1');
    const [age, setAge] = useState(20);

    const handleAge = () => {
        setAge(50)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={handleAge}>Change Age</button>
        </div>
    );
}

export default EmployeeFun;