import React, { useState } from 'react';

export default function BT9() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [submittedData, setSubmittedData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedData({ ...formData }); // Lưu lại thông tin sau khi submit
    }

    return (
        <div>
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <br />
                <div>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <h5>Email: {submittedData.email}</h5>
            <h5>Mật khẩu: {submittedData.password}</h5>
        </div>
    );
}
