import React, { useState } from 'react';

export default function BT6() {
    const [isDisplayed, setIsDisplayed] = useState<boolean>(true);
    const handleClick = () => {
        setIsDisplayed(!isDisplayed);
    }

    return (
        <div>
            BT6
            <button onClick={handleClick}>{isDisplayed ? "Hiện" : "Ẩn"}</button>
        </div>
    );
}
