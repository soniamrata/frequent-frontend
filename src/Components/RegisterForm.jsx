import React, { useState , } from 'react';
import { Link, useNavigate } from "react-router-dom"
import './Register.css';
// import axios from 'axios';

const RegistrationForm = () => {

  const navigate = useNavigate()

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

  let formatTwoDigits = (digit) => ("0" + digit).slice(-2);
  let tempDate = new Date();

  let currentDate = `${tempDate.getFullYear()}-${formatTwoDigits(tempDate.getMonth() + 1)}-${formatTwoDigits(tempDate.getDate())}`;
  // let currentNumDate = `${tempDate.getFullYear()}${formatTwoDigits(tempDate.getMonth() + 1)}${formatTwoDigits(tempDate.getDate())}`;

  let minDate = `${tempDate.getFullYear() - 14}-${formatTwoDigits(tempDate.getMonth() + 1)}-${formatTwoDigits(tempDate.getDate())}`;
  let maxDate = currentDate


  function setAge(value) {
    let inputDate = value.split("-")
    let currentYear = currentDate.split("-")
    let ageValue = currentYear[0] - inputDate[0]
    setUser({ ...user, age: ageValue, dateOfBirth: value });
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let firstName = user.firstName
    let lastName = user.lastName
    let email = user.email
    let country = user.country
    let state = user.state
    let city = user.city
    let gender = user.gender
    let dateOfBirth = user.dateOfBirth
    let age = user.age


    // try {
    //   // await axios.post('https://frequent-research-project.vercel.app/register', user);
    // } catch (error) {
    //   console.log(error);
    //   alert('Registration failed');
    // }

    let result = await fetch("https://frequent-research-project.vercel.app/register", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, country, state, city, gender, dateOfBirth, age })
    })

    result = await result.json()

    if (result.status === false) {
      alert(result.message)
    } else {
      alert('Registration successful');
      navigate('/')
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
          <input id="male" type="radio" name='gender' value='Male' onClick={handleChange} />
          <label htmlFor="male">Male</label>

          <input id="female" type="radio" name='gender' value='Female' onClick={handleChange} />
          <label htmlFor="female">Female</label>

          <input id="other" type="radio" name='gender' value='Others' onClick={handleChange} />
          <label htmlFor="other">Other</label>
        </div><br />

        <div>
          <label htmlFor='dateOfBirth'>Date of Birth: </label>
          {/* <input type='date' name='dateOfBirth' id='dateOfBirth' min={minDate} max={maxDate} value={user.dateOfBirth} onChange={handleChange} required /> */}
          <input type='date' name='dateOfBirth' id='dateOfBirth' max={minDate} value={user.dateOfBirth}  onChange={(e) => setAge(e.target.value)} required />
        </div><br />

        <div>
          <label htmlFor='age'>Age: </label>
          <input type='number' name='age' id='age' value={user.age} onChange={handleChange} readOnly required/>
          {/* <input type='number' name='age' id='age' value={user.age} required /> */}
        </div><br />

        <div className='buttonDiv'>
          <button className='submit' type='submit'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
