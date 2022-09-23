import { Link } from "react-router-dom";


const Footer = (props) => {
    return (
        <div className="footer">
            <Link class="whiteP" style={{textDecoration: 'none'}} to="/aboutus">
                About Us
            </Link>
            <Link class="whiteP" style={{textDecoration: 'none'}} to="/privacy">
            Privacy Policy
            </Link>
        </div>
    )
}

export default Footer;