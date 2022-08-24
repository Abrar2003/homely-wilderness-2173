import { Link } from "react-router-dom"

function Navbar(){
    return(
       <div>
        <div>
            <Link to="/">
                <div>
                    <p>WOMEN</p>
                </div>
            </Link>
            <Link to="/menpage">
                <div>
                    <p>MEN</p>
                </div>
            </Link>
            <Link>
                <div to="/kidspage">
                    <p>KIDS</p>
                </div>
            </Link>
            <Link to="lifepage">
                <div>
                    <p>LIFE</p>
                </div>
            </Link>
        </div>
        <div>
            <Link to="signup">
                <div>
                    <p>Signup for Newsletter</p>
                </div>
            </Link>
            <Link>
                <div>
                    <p>My Account</p>
                </div>
            </Link>
            <Link>
                <div>
                    <p>My Wishlist</p>
                </div>
            </Link>
            <Link>
                <div>
                    <p>India | English</p>
                </div>
            </Link>
        </div>
       </div>
    )
}

export default Navbar;