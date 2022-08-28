import styles from "./styles.module.css";
function Signup(){
    return(
        <div className={styles.mainSignup}>
            <div style={styles.signup}>
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
                    <input type="submit" name="submitsignup" value="Register" />
                </form>
            </div>
            <div className={styles.dividerVirtical}>{/* for divider line */}</div>
            <div style={styles.login}>
                <h2>ALREADY REGISTERED?</h2>
                <p>If you have an account with us. Please log in</p>
                <form>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" name="submitlogin" placeholder="login" />
                </form>
            </div>
        </div>
    )
}
export default Signup