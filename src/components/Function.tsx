import React, { ReactHTML, useState } from 'react'
interface User {
    username:string,
    email:string
}
export default function Function() {
    // const [username,setUsername]= useState<string>("")
    // const [email,setEmail]=useState<string>("")
    const [user,setUser]= useState<User>({
        username:"",
        email:""
    })
    const handleClick = () => {
        console.log("hello!");
    }
    const HandleDelete = (userID:any) => {
        console.log("userID", userID);
    }
    const register = () => {
        console.log("user đăng kí",user);
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>) => {
        let name= e.target.name;
        let value= e.target.value;
        setUser({...user,[name]:value})
    }
    // const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     // console.log("2222222",e.target.value);
    //     setUsername(e.target.value)
    // }
    // const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     // console.log("2222222",e.target.value);
    //     setEmail(e.target.value)
    // }

  return (
    <div>
        Function
        <p onClick={()=>HandleDelete(5)}>hoa</p>
        <button onClick={handleClick}>click</button>
        <label htmlFor="">username</label>
        <input 
        onChange={handleChange}
        type="text" 
        name='username'
        />
        <br />
        <label htmlFor="">email</label>
        <input 
        onChange={handleChange}
        type="text"
        name='email'
        />
        <br />
        <button onClick={register}>register</button>

    </div>
  )
}
