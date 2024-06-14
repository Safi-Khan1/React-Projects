import React from 'react';

function Yes({ render }) {
    return (
        <> 
            <h1> i am parent </h1>
            <button onClick={render}>Yes</button>
        </>


    );
}

export default Yes;