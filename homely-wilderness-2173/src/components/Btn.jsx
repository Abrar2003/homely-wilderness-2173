import styles from "./styles.module.css";
function Btn({text = "SHOP NOW", arrow = true}){
    const imgStyle = {
        backgroundColor : 'white'
    }
    return(
        <button className={styles.btn}>{text}{arrow? <img style={imgStyle} src="https://cdn.iconscout.com/icon/premium/png-256-thumb/double-right-arrow-1752244-1492517.png" alt="Arrow"/> : null}</button>
    )
}

export default Btn;