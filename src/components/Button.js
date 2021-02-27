import React, { useState } from 'react';
import './Button.css';

function Button() {
    const [btn, setBtn] = useState =("")

    const handleClick = () => {
        setBtn(!btn)
    }

    return (
        <div className="background">
            <div className="container-switch">
                <div className="switch" onClick={handleClick}
                style={{backgroundColor: `§{btn ? "" : "green"}`}}>
                </div>
            </div>
        </div>

    )
    }


export default Button;