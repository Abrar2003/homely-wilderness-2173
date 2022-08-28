import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom"
import { AppContext } from "../contexts/AppContext";
import styles from "./styles.module.css";

function Payment() {
  const initform = {
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postcode: "",
    number: "",
  };
  const { setPay, productKey } = useContext(AppContext);
  const [data, setData] = useState({});
  const [form, setform] = useState(initform);
  const { check, setcheck, setProductKey }= useContext(AppContext);

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setform({
      ...form,
      [key]: value,
    });
    console.log(form);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/Products/${productKey}`)
      .then((res) => res.json())
      .then((res) => setData(res));
    setPay(false);
  }, []);
  const checkout = ()=>{
    setProductKey(data.id)
    setcheck(true);
  }
  if(check){
    return <Navigate to="/checkoutpage"/>
  }
  return (
    <div className={styles.paymentMain}>
      <div className={styles.paymentleft}>
        <form>
          <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
          <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
          <input type="text" name="address" placeholder="Address" onChange={handleChange}/>
          <input type="text" name="city" placeholder="City" onChange={handleChange}/>
          <input type="text" name="country" placeholder="Country" onChange={handleChange}/>
          <input type="text" name="postcode" placeholder="PostCode" onChange={handleChange}/>
          <input type="text" name="number" placeholder="Mobile No."onChange={handleChange}/>
        </form>
        <button className={styles.btn} disabled={form.name === "" || form.email === "" || form.address === "" || form.city === "" || form.country === "" || form.postcode === "" || form.number === ""} onClick={checkout}>PROCEED TO CHECKOUT</button>
      </div>
      <div key={data.id} className={styles.prod}>
        <img src={data.image} alt={data.description} />
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p>{data.price}</p>
      </div>
    </div>
  );
}

export default Payment;
