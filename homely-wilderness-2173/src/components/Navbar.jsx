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
              className={({ isActive }) =>
                !isActive ? styles.rightdefault : styles.rightactive
              }
            >
              <div>
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
        <div>
          { bottomnav.map(name => <ProductPageLink name={name}/>) }
        </div>
        <div className={styles.searchbar}>
          <input className={styles.inp} type="text" name="" id="" placeholder="Serach for..."/>
          <img
            width="25px"
            height="25px"
            src="https://cdn.iconscout.com/icon/free/png-64/search-1436-527970.png"
            alt="search"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
