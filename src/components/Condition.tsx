import React, { useState } from 'react'
import Model from './Model'


export default function Condition() {
  const [active,setActive]= useState<boolean>(false)
  const handleClick = () => {
    console.log('ăn vào hàm')
    setActive(true)
  }
  return (
    <div>Condition( điều kiện để render)
      {active ?<Model></Model>:""} <br />
      <button onClick={handleClick}>click</button>
    </div>
  )
}
