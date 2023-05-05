import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    city: '',
    gender: '',
    dateOfBirth: '',
    age: ''
  });

  // console.log(user)

  const current = new Date();
  let date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
  date = date.toString()
  console.log(date)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // try {
    //   // await axios.post('https://frequent-research-project.vercel.app/register', user);
    // } catch (error) {
    //   console.log(error);
    //   alert('Registration failed');
    // }

    let result = await fetch("frequent-research-project.vercel.app/register", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user })
    })

    result = await result.json()
    console.log(result);

    if (result.status === false) {
      alert(result.message)
    } else {
      console.log(result);
      alert('Registration successful');
    }

  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input type='text' name='firstName' id='firstName' value={user.firstName} onChange={handleChange} required />
        </div><br />

        <div>
          <label htmlFor='lastName'>Last Name: </label>
          <input type='text' name='lastName' id='lastName' value={user.lastName} onChange={handleChange} required />
        </div><br />

        <div>
          <label htmlFor='email'>Email: </label>
          <input type='email' name='email' id='email' value={user.email} onChange={handleChange} required />
        </div><br />

        <div>
          <label htmlFor='country'>Country: </label>
          <input type='text' name='country' id='country' value={user.country} onChange={handleChange} required />
        </div><br />

        <div>
          <label htmlFor='state'>State: </label>
          <input type='text' name='state' id='state' value={user.state} onChange={handleChange} required />
        </div><br />

        <div>
          <label htmlFor='city'>City: </label>
          <input type='text' name='city' id='city' value={user.city} onChange={handleChange} required />
        </div><br />

        <div className='gender'>
          <input id="male" type="radio" name='gender' value='male' onClick={handleChange} />
          <label htmlFor="male">Male</label>

          <input id="female" type="radio" name='gender' value='female' onClick={handleChange} />
          <label htmlFor="female">Female</label>

          <input id="other" type="radio" name='gender' value='other' onClick={handleChange} />
          <label htmlFor="other">Other</label>
        </div><br />

        <div>
          <label htmlFor='dateOfBirth'>Date of Birth: </label>
          <input type='date' name='dateOfBirth' id='dateOfBirth' min={date} value={user.dateOfBirth} onChange={handleChange} required />
        </div><br />

        <div>
          <label htmlFor='age'>Age: </label>
          <input type='number' name='age' id='age' value={user.age} onChange={handleChange} required />
        </div><br />

        <div className='buttonDiv'>
          <button className='submit' type='submit'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
