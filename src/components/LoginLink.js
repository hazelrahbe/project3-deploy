import { Link } from "react-router-dom";

const LoginLink = () => {
    return (
    <div className="loginLink">
        <Link to='/login'>
            <h4>LogIn</h4>
        </Link>
        <Link to='/register'>
            <h4>Register</h4>
        </Link>
    </div>
    )
}

export default LoginLink;


