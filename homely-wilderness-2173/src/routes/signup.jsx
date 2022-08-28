import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import styles from "./styles.module.css";
function Signup(){

    const { login, setlogin } = useContext(AppContext);

    const handlelogin = ()=>{
        alert("login successfull!")
        setlogin(true);
    }
    const handleRegister = ()=>{
        alert("You've registered with us successfully!")
        setlogin(true);
    }
    if(login){
        return <Navigate to="/"/>
    }
    return(
        <div className={styles.mainSignup}>
            <div className={styles.signup}>
                <h2>CREATE AN ACCOUNT</h2>
                <p>Please enter the following information to create your account</p>
                <form>
                    <select name="academic">
                        <option value="">Academic title</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof.">Prof.</option>
                        <option value="Prof. Dr.">Prof. Dr.</option>
                    </select>
                    <input type="text" name="name" placeholder="Full Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="passwordConfirm" placeholder="Confirm Password" />
                    <p>I agree that Mytheresa may insert analytical web beacons into the newsletter and create a personalized user profile based on my purchase and usage behavior, including sending a notification when I have placed something in the shopping cart. Further details can be found in our Privacy Policy, clause 5. I understand that I can revoke my consent at any time by emailing privacy@mytheresa.com.</p>
                    <button className={styles.btn} onClick={handleRegister}>Register</button>
                </form>
            </div>
            <div className={styles.dividerVirtical}>{/* for divider line */}</div>
            <div className={styles.login}>
                <h2>ALREADY REGISTERED?</h2>
                <p>If you have an account with us. Please log in</p>
                <form>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button className={styles.btn} onClick={handlelogin}>Log in</button>
                </form>
            </div>
        </div>
    )
}
export default Signup