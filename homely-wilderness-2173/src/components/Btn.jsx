import styles from "./styles.module.css";
function Btn({palceholder = "SHOP NOW", arrow = true}){
    return(
        <button className={styles.btn}>{palceholder}{arrow? <img className="icon" src="right-arrow.jpeg" alt="Arrow"/> : null}</button>
    )
}

export default Btn;