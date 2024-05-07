import React, { useState } from 'react';

export default function BT3() {
    const [dateValue, setDateValue] = useState<string>("");
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateValue(e.target.value);
    }

    return (
        <div>
            BT3
            <label htmlFor="dateInput">Nhập ngày:{dateValue}</label><br />
            <input 
                id="dateInput"
                type="date" 
                value={dateValue} 
                onChange={handleDateChange} 
            />
        </div>
    );
}
