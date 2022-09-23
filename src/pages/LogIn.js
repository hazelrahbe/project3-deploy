import { useState } from "react"

const Login = () => {
  const initialState = { username: '', password: '' };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
      <label className="labels">Username</label>
      <div className="placeholders">
      <input id="username"  type="text" onChange={handleChange} value={formState.username}/>
      </div>
      <label className="labels">Password</label>
      <div className="placeholders">
      <input id="password" type="password" onChange={handleChange} value={formState.password}/>
      </div>
      
      <div className="placeholders">
      <button id="loginButton" type="submit">Login</button>
      </div>
      </div>
    </form>
  );
}
export default Login;