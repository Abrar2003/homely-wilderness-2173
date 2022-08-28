import { NavLink, Link } from "react-router-dom";
import ProductPageLink from "./ProductPageLink";
import styles from "./styles.module.css";

function Navbar() {
  const navlinksleft = [
    { link: "/", name: "WOMEN" },
    { link: "/menpage", name: "MEN" },
    { link: "/kidspage", name: "KIDS" },
    { link: "/lifepage", name: "LIFE" },
  ];
  const navlinksright = [
    { link: "/newsletter", name: "Signup for Newletter" },
    { link: "/myaccount", name: "My Account" },
    { link: "/wishlist", name: "My Wishlist" },
    { link: "/region", name: "International | English" },
  ];

  const bottomnav = ["NEW ARRIVALS", "DESIGNERS", "CLOTHING", "SHOES", "BAGS", "ACCESSORIES", "JEWELRY", "VACATION", "SALE"];
  return (
    <div className={styles.navbar}>
      <div className={styles.topnav}>
        <div className={styles.topnavleft}>
          {navlinksleft.map((item) => (
            <NavLink
              to={item.link}
              key={item.name}
              className={({ isActive }) =>
                !isActive ? styles.leftdefault : styles.leftactive
              }
            >
              <div>
                <p>{item.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
        <div className={styles.topnavright}>
          {navlinksright.map((item) => (
            <NavLink
              to={item.link}
              key={item.name}
              className={({ isActive }) =>
                !isActive ? styles.rightdefault : styles.rightactive
              }
            >
              <div key={item.name}>
                <p>{item.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={styles.midnav}>
        <Link to="/">
          <img
            width="50%"
            src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220824T175121"
            alt="title"
          />
        </Link>
      </div>
      <div className={styles.bottomnav}>
        
        { bottomnav.map(name => <p key={name}>{name}</p>) }
       
        <div className={styles.searchbar}>
          <input className={styles.inp} type="text" name="" id="" placeholder="Serach for..."/>
          <img
            width="25px"
            height="25px"
            src="https://cdn.iconscout.com/icon/free/png-64/search-1436-527970.png"
            alt="search"
          />
        </div>
        <div>
              <Link to="/cartpage">
                <img width="32px" height="32px" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Cpath%20d%3D%22M41.3%2014.58a5%205%200%200%200-5-4.58H34a10%2010%200%200%200-20%200h-2.32a5%205%200%200%200-5%204.58l-2.36%2028a5%205%200%200%200%205%205.39h29.35a5%205%200%200%200%205-5.4ZM24%202a8%208%200%200%201%208%208H16a8%208%200%200%201%208-8Zm14.67%2044H9.33a3%203%200%200%201-3-3.23l2.35-28a3%203%200%200%201%203-2.75H14v6h-1a1%201%200%200%200%200%202h4a1%201%200%200%200%200-2h-1V12h16v6h-1a1%201%200%200%200%200%202h4a1%201%200%200%200%200-2h-1v-6h2.32a3%203%200%200%201%203%202.75l2.35%2028a3%203%200%200%201-3%203.25Z%22%20data-name%3D%22Shopping%20Bag%22%2F%3E%3C%2Fsvg%3E" alt="cart" />
                </Link>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
