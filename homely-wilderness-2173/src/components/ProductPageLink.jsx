import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import Btn from "./Btn";
// import { womenProduct, mensProduct} from ".././DataBase.json"
import styles from "./styles.module.css";

function ProductPage() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("asc");
//   const [pay, setPay] = useState(false);
  const { setProductKey, pay, setPay } = useContext(AppContext);

  useEffect(() => {
    fetch(`http://localhost:8080/Products?_sort=price&_order=${sort}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [sort]);

  const handleChageSort = (e) => {
    setSort(e.target.value);
  };

  const payment = (id) => {
    setProductKey(id);
    setPay(true);
  };
  if(pay){
    return <Navigate to="/paymentpage"/>
  }
  return (
    <div className={styles.main}>
      <div className={styles.productTop}>
        <p>TOTAL PRODUCTS: 30</p>
        <select id="" onChange={handleChageSort}>
          <option value="desc">Price High to Low</option>
          <option value="asc">Price Low to High</option>
        </select>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.prodgrid}>
        {data.map((item) => {
          return (
            <div key={item.id} className={styles.prod}>
              <img src={item.image} alt={item.description} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button className={styles.btn} onClick={() => payment(item.id)}>
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductPage;
