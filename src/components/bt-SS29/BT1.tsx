import React from 'react'

export default function BT1() {
    const handleClick = () => {
        console.log('Clicked')
    }
  return (
    <div>
        BT1
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}
