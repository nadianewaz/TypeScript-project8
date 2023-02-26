import React, { useState } from 'react'

const Form = () => {
    const [formUser, setFormUser] = useState("");
    const [email, setEmail] = useState("");

    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormUser(event.target.value);
    }
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUser = {formUser, email}
        console.log(newUser);
    }

  return (
    <>
    <h2>Form User </h2>
    <form onSubmit={handleFormSubmit}>
        <div>
            <label>
                Name :
                <br /> 
                <input type="text" id='name' value={formUser} onChange={handleForm} required/>
            </label>
        </div>
        <br />
        <div>
            <label>
                Email :
                <br /> 
                <input type="email" id='email' value={email} onChange={handleEmail} required/>
            </label>
        </div>

        <br />
        <button type='submit'>Click!!</button>
        
        </form>
    
    </>
  )
}

export default Form