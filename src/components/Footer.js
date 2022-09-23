import { Link } from "react-router-dom";


const Footer = (props) => {
    return (
        <div className="footer">
            <Link style={{textDecoration: 'none'}} to="/aboutus">
            <div class="whiteP"><p>About Us</p></div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/privacy">
            <div class="whiteP"><p>Privacy Policy</p></div>
            </Link>
        </div>
    )
}

export default Footer;