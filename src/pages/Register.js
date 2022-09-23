import { useState } from "react"

const Register = () => {
  const initialState = { username: '', password: '', email: ''};
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
      <div className="registerinput">
      <input id="username" type="text" onChange={handleChange} value={formState.username}/>
      </div>
      <label className="labels" id="email">Email</label>
      <div className="registerinput">
      <input id="emails" type="text" onChange={handleChange} value={formState.email}/>
      </div>
      <label className="labels">Password</label>
      <div className="registerinput">
      <input id="password" type="password" onChange={handleChange} value={formState.password}/>
      </div>
      <div className="registerinput">
      <button type="submit">Register</button>
      </div>
      </div>
    </form>
  );
}
export default Register;