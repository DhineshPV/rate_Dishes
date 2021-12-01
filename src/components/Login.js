import React,{useState}from 'react'
import './Login.css'

export const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

    return (
    <div className="login">
    <h1>Get start for Rating</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username:</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p>Password:</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
    )
}
