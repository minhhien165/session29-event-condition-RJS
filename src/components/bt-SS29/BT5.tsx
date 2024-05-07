import React, { useState } from 'react';

export default function BT5() {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    }

    return (
        <div>
            BT5
            <button onClick={toggleVisibility}>{isHidden ? "Hiện" : "Ẩn"}</button>
        </div>
    );
}
