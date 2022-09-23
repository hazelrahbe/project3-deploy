import { Form, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
    return (
        <div className="nav">
            <Link style={{textDecoration: 'none'}} to='/'>
            <div class="whiteP"><p>Home</p></div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/cocktails">
            <div class="whiteP"><p>Cocktails</p></div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/create">
            <div class="whiteP"><p>CreateYourOwn</p></div>
            </Link>
      </div>
    )
}

export default Nav;