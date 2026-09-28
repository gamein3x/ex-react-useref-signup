import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

const bigLorem = `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta enim officiis vero porro ex id atque minus dolorem quisquam consequatur, accusantium modi est totam quidem laudantium repellendus molestias facilis eaque
  Dolores porro ipsum eligendi a voluptates aliquam nostrum! Dignissimos, porro distinctio. Doloremque qui libero culpa recusandae distinctio atque adipisci quasi praesentium. Perferendis deleniti doloremque fuga voluptates fugiat assumenda saepe illo?
  Asperiores quibusd vero repellendus? Sint deserunt, voluptas aliquam perspiciatis culpa nihil eius distinctio quasi, voluptates consectetur, magnam temporibus eaque vitae accusamus cum sit delectus dolore?
  Quis unde ipsa quos et officia nemo odit quibusdam dolore. Iste, voluptas. Laboriosam ipsa mollitia distinctio optio. Totam sequi nesciunt alias voluptatum fuga autem, sunt quas repellendus minima ea exercitationem?"`

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0987654321";
const symbols = "!$$%&/()=?^[]{}@#°*+§:.;,-_<>";

function App() {

  //Campi controllati

  const [fullname, setFullname] = useState("Testname");
  const [username, setUsername] = useState("Testuser");
  const [password, setPassword] = useState("Testpass8@");
  const [specialization, setSpecialization] = useState("FrontEnd");
  const [experienceYears, setExperienceYears] = useState("10");
  const [description, setDescription] = useState(bigLorem);

  

  const isUserValid = useMemo(() => {
    const charsValid = username.split("").every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    )

    return charsValid && username.trim().length > 6
  }, [username]);

  const isPasswordValid = useMemo(() => {
    return (password.trim().length > 6 &&
      password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
    )
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000
  }, [description]);

  const handleSubmit = e => {
    e.preventDefault();
    if (
      !fullname.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim() ||
      !isDescriptionValid ||
      !isPasswordValid ||
      !isUserValid
    ) {
      alert("Error: one or more of the fields is not filled yet or wrong.")
      return
    }
    console.log(`Submit data:\n${fullname} \n${username} \n${password} \n${specialization} \n${experienceYears} \n${description}`);

  };

  return (
    <>
      <h2>Web Developer Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Full name</p>
          <input type="text" value={fullname} onChange={(e) => { setFullname(e.target.value) }} />
        </label>
        <label>
          <p>Username</p>
          <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          {username.trim() && 
          (<p style={{ color:isUserValid ? "green" : "red" }}>
            { isUserValid ? "Success" : "Username must be longer than 6 characters" }
          </p>)
          }
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          {password.trim() && 
          (<p style={{ color:isPasswordValid ? "green" : "red" }}>
            { isPasswordValid ? "Success" : "Must contain at least one letter, number and symbol" }
          </p>)
          }
        </label>
        <label>
          <p>Specialization</p>
          <select value={specialization} onChange={(e) => { setSpecialization(e.target.value) }}>
            <option value="Full Stack">Full Stack</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
          </select>
          
        </label>
        <label>
          <p>Experience years</p>
          <input type="number" value={experienceYears} onChange={(e) => { setExperienceYears(e.target.value) }} />
        </label>
        <label>
          <p>Description</p>
          <textarea value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
          {description.trim() && 
          (<p style={{ color:isDescriptionValid ? "green" : "red" }}>
            { isDescriptionValid ? ` Valid (${description.trim().length})` : `Must contain 100 to 1000 characters (${description.trim().length})` }
          </p>)
          }
        </label>
        <button type='submit'> Invia </button>
      </form>
    </>
  )
}

export default App
