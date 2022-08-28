import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import styles from "./styles.module.css";

function Checkout() {
  const initform = {
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postcode: "",
    number: "",
  };
  const { setcheck, setProductKey, productKey } = useContext(AppContext);
  const [form, setform] = useState(initform);

  const payiconUrls = [
    "https://cdn.iconscout.com/icon/free/png-64/american-express-1869029-1583153.png",
    "https://cdn.iconscout.com/icon/free/png-64/visa-credit-card-1822954-1547549.png",
    "https://cdn.iconscout.com/icon/free/png-64/mastercard-3521564-2944982.png",
    "https://cdn.iconscout.com/icon/free/png-64/diners-club-international-675719.png",
    "https://cdn.iconscout.com/icon/free/png-64/jcb-8-711789.png",
    "https://cdn.iconscout.com/icon/free/png-64/union-15-283039.png",
    "https://cdn.iconscout.com/icon/free/png-64/discover-network-675707.png",
  ];
  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setform({
      ...form,
      [key]: value,
    });
    console.log(form);
  };

  useEffect(() => {
    setcheck(false);
  });
  const onClick = () => {
    setProductKey(productKey);
    alert("Your order is placed succesfully");
    <Navigate to="/"/>
  };
  return (
    <div className={styles.main}>
      <h3>Pay with Card</h3>
      {payiconUrls.map((url) => (
        <img
          key={url}
          className={styles.icons}
          width="20px"
          height="20px"
          src={url}
        />
      ))}
      <div className={styles.checkoutform}>
        <div>
          <label>NAME ON CARD*</label>
          <br />
          <input type="text" name="" onChange={handleChange} />
        </div>

        <div>
          <label>CARD NUMBER*</label>
          <br />
          <input type="number" name="" onChange={handleChange} />
        </div>

        <div>
          <label>Expiration Date*</label>
          <br />
          <input type="month" name="" onChange={handleChange} />
        </div>

        <div>
          <label>CVV*</label>
          <br />
          <input
            type="number"
            name=""
            min="100"
            max="999"
            onChange={handleChange}
          />
        </div>
      </div>
      <button className={styles.btn} onClick={onClick}>
        Pay Now
      </button>
    </div>
  );
}

export default Checkout;
