import React from 'react';

function No({render}) {
    return (
        <>
        <h1>This is Child</h1>
        <button onClick={render}>No</button>
        </>
 
        
    );
}

export default No;