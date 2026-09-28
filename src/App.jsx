import { useState } from 'react'
import './App.css'

function App() {

  //Campi controllati

  const [fullname, setFullname] = useState("Testname");
  const [username, setUsername] = useState("Testuser");
  const [password, setPassword] = useState("Testpass");
  const [specialization, setSpecialization] = useState("FrontEnd");
  const [experienceYears, setExperienceYears] = useState("10");
  const [description, setDescription] = useState("Ciao, sono un test");

  const handleSubmit = e => {
    e.preventDefault();
    if (
      ! fullname.trim() ||
      ! username.trim() ||
      ! password.trim() ||
      ! specialization.trim() ||
      ! experienceYears.trim() ||
      experienceYears <= 0 ||
      ! description.trim()
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
          <input type="text" value={fullname} onChange={(e) => {setFullname(e.target.value)}}/>
        </label>
        <label>
          <p>Username</p>
          <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        </label>
        <label>
          <p>Specialization</p>
          <select value={specialization} onChange={(e) => {setSpecialization(e.target.value)}}>
            <option value="Full Stack">Full Stack</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
          </select>
        </label>
        <label>
          <p>Experience years</p>
          <input type="number" value={experienceYears} onChange={(e) => {setExperienceYears(e.target.value)}}/>
        </label>
        <label>
          <p>Description</p>
          <textarea value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>
        </label>
        <button type='submit'> Invia </button>
      </form>
    </>
  )
}

export default App
