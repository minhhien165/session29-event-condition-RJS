import React, { useState } from 'react';

export default function BT4() {
    const [selectedValue, setSelectedValue] = useState<string>("");
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
    }

    return (
        <div>
            BT4
            <label htmlFor="citySelect">Chọn tỉnh/thành phố:{selectedValue}</label><br />
            <select id="citySelect" value={selectedValue} onChange={handleSelectChange}>
                <option value="">-- Chọn tỉnh / Thành phố --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Nghệ An">Nghệ An</option>
                <option value="Hà Tĩnh">Hà Tĩnh</option>
            </select>
        </div>
    );
}
