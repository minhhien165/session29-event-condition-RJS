import React, { useState } from 'react'

export default function BT2() {
    const [enter,setEnter]= useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value)
        setEnter(e.target.value)
    }
  return (
    <div>
        BT2
        <label htmlFor="">Dữ liệu người dùng nhập:{enter}</label><br />
        <input 
        placeholder='Nhập dữ liệu'
        value={enter}
        onChange={handleChange}
        type="text" />
    </div>
  )
}
