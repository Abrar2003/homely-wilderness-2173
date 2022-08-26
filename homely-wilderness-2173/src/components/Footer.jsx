import styles from "./styles.module.css";


function Footer() {
  const mytheresa = [
    "About us",
    "Trust & service",
    "Sustainability",
    "Press",
    "Careers",
    "Investors Relations",
    "Affiliates",
    "Tax-Free Shopping",
  ];
  const customercare = [
    "Contact us",
    "Shipping information",
    "Secure payment",
    "Exchanges",
    "Returns",
    "After sale service",
    "Gift card",
  ];
  const iconUrls = [
    "https://cdn.iconscout.com/icon/free/png-64/linkedin-1464529-1239440.png",
    "https://cdn.iconscout.com/icon/free/png-64/facebook-social-media-fb-logo-square-44659.png",
    "https://cdn.iconscout.com/icon/free/png-64/twitter-1464537-1239448.png",
    "https://cdn.iconscout.com/icon/free/png-64/pinterest-45-189742.png",
    "https://cdn.iconscout.com/icon/free/png-64/instagram-63-189784.png",
    "https://cdn.iconscout.com/icon/free/png-64/youtube-1464540-1239451.png",
    "https://cdn.iconscout.com/icon/free/png-64/phone-iphone-mobile-cell-communication-30536.png",
    "https://cdn.iconscout.com/icon/free/png-64/wechat-16-761725.png",
    "https://cdn.iconscout.com/icon/free/png-64/weibo-2270630-1891157.png",
  ];
  const payIconUrls = [
    "https://cdn.iconscout.com/icon/free/png-64/american-express-1869029-1583153.png",
    "https://cdn.iconscout.com/icon/free/png-64/visa-credit-card-1822954-1547549.png",
    "https://cdn.iconscout.com/icon/free/png-64/mastercard-3521564-2944982.png",
    "https://cdn.iconscout.com/icon/free/png-64/diners-club-international-675719.png",
    "https://cdn.iconscout.com/icon/free/png-64/jcb-8-711789.png",
    "https://cdn.iconscout.com/icon/free/png-64/union-15-283039.png",
    "https://cdn.iconscout.com/icon/free/png-64/discover-network-675707.png",
    "https://cdn.iconscout.com/icon/free/png-64/paypal-2752104-2284921.png"
  ]
  return (
    <div className={styles.footer}>
      <div className={styles.divider}>{/*divider line */}</div>
      <div className={styles.footertop}>
        <div>
          <div>
            <h2>SERVICE & SECURITY</h2>
            <h3>Fast delivery</h3>
            <p>Delivery within 2 business days</p>
          </div>
          <div>
            <h3>Free return within 30 days</h3>
            <p>Convenient return service</p>
          </div>
          <div>
            <h3>Secure payment and data protection</h3>
            <p>SSL encryption for secure transactions and personal data</p>
          </div>
        </div>
        <div>
          <h2>MYTHERESA</h2>
          {mytheresa.map((names) => (
            <p>{names}</p>
          ))}
        </div>
        <div>
          <h2>Customer Care</h2>
          {customercare.map((names) => (
            <p>{names}</p>
          ))}
        </div>
        <div>
          <h2>GET TREND UPDATES, STYLE TIPS AND MORE</h2>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="your email address here"
            />
            <button>Sign up</button>
          </div>
          <div>
            <h3>Wish List</h3>
            <p>receive personal notification</p>
          </div>
          <div>
            <h4>Follow us</h4>
            {iconUrls.map(url => <img className={styles.icons} width="20px" height="20px" src={url}/>)}
          </div>
        </div>
      </div>
      <div className={styles.divider}>{/*divider line */}</div>
      <div className={styles.footerbottom}>
        <div>
          <h4>Payment Methods:</h4>
          {payIconUrls.map(url => <img className={styles.icons} height="30px" src={url}/>)}
        </div>
        <div>
          <h4>Delivered by:</h4>
          <img src="https://cdn.iconscout.com/icon/free/png-64/dhl-2-283248.png" alt="DHL" />
        </div>
      </div>
      <div className={styles.divider}>{/*divider line */}</div>
    </div>
    
  );
}
export default Footer;
