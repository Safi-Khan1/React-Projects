import React, { useState } from 'react';

function Form(props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [record, setRecord] = useState([])

    let emailChange = (event) => {
        setEmail(event.target.value);
    };
    let passChange = (event) => {
        setPassword(event.target.value);
    };

    let Submit = (event) => {
        event.preventDefault();
        setRecord([...record, { email, password }]);
        setEmail('')
        setPassword('')

};
let Delete = (index) => {
    let newRecord = [...record]; 
    newRecord.splice(index, 1); 
    setRecord(newRecord); 
}

return (
    <div className="foorm">
        <form onSubmit={Submit}>
            <input name='email' type="email" onChange={emailChange} value={email} />
            <input name='password' type="password" onChange={passChange} value={password} />
            <button type='submit'>Submit</button>
        </form>
        <ul>
            {record.map((record, index) => (
                <li key={index}>
                    <div>Email: {record.email}</div>
                    <div>Password: {record.password}</div>
                    <button onClick={() => Delete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
);
}

export default Form;
