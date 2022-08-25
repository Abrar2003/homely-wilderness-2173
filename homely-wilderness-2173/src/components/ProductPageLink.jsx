import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import styles from "./styles.module.css";

function ProductPageLink({name}){

    const { setProductKey } = useContext(AppContext)

    setProductKey(name);

    return(
        <Link className={styles.ProductLink} to="/productpage">{name}</Link>
    )
}

export default ProductPageLink;