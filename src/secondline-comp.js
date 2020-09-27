import React from 'react';

function SecondLine(props) {
    return(
        <div style={{width: '25%', height: '10vh', border: '1px solid #A9AAB3'}}>
            <h1 style={{textAlign: 'center', fontSize: '2.0em', margin: 'auto', padding: '10px'}}>{props.name}</h1>
        </div>
    )
}

export default SecondLine;