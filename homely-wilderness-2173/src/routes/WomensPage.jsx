import Btn from "../components/Btn";
import styles from "./styles.module.css";
function WomensPage() {
  const products = [
    {
      url: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/Finest_edit_CW34_1_2x_20220819173906.jpg",
      name: "Chloé",
    },
    {
      url: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/Finest_edit_CW34_2_2x_20220819173908.jpg",
      name: "Khaite",
    },
    {
      url: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/Finest_edit_CW34_3_2x_20220819173907.jpg",
      name: "Marni",
    },
    {
      url: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/Finest_edit_CW34_4_2x_20220819173907.jpg",
      name: "Loewe",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.womenDiv1}>
        <div>
          <h3>The Standouts of this Season</h3>
          <h1>PRE FALL 2022</h1>
          <Btn />
        </div>
      </div>
      <div className={styles.womenDiv2}>
        <h3>Don't Miss Out</h3>
        <h1>New Arrivals</h1>
        <h4>Nanushka, Jimmy Choo, Alanui, Patou...</h4>
      </div>
      <div className={styles.womenDiv3}>
        <div>
          <h3>A CUT ABOVE</h3>
          <h1>The modern approach to double denim</h1>
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/ActboxTall_CW34_1_2x_20220819173837.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <Btn />
        </div>
        <div>
          <h3>CONMPACT CARRY</h3>
          <h1>On-the-go never looked so stylish</h1>
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/ActboxSmall_CW34_1_2x_20220819173849.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <Btn />
        </div>
        <div>
          <h3>TIME TO REBOOT</h3>
          <h1>Let's reset your shoe closet for Fall</h1>
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/ActboxSmall_CW34_2_2x_20220819173849.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <Btn />
        </div>
      </div>
      <div className={styles.womenDiv4}>
        <div>
          <h3>ALREADY TAKEN</h3>
          <h1>New bags primed for date night</h1>
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/ActboxSmall_CW34_3_2x_20220819173848.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <Btn />
        </div>
        <div>
          <h3>BEST IN SEASON</h3>
          <h1>The shoe designs trending right now</h1>
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/ActboxSmall_CW34_4_2x_20220819173848.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <Btn />
        </div>
        <div>
          <h3>NEW FROM ALEXANDER MCQUEEN</h3>
          <h1>Meet the collection led by nature</h1>
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW35/ActboxTall_CW34_2_2x_20220819173838.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <Btn />
        </div>
      </div>
      <div className={styles.womenDiv5}>
        <div>
          {products.map((item) => {
            return (
              <div key={item.name} className={styles.womenDiv5Div}>
                <img src={item.url} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
            );
          })}
        </div>
        <Btn />
      </div>
      <div className={styles.divider}>{/*divider line */}</div>
      <div className={styles.about}>
        <div>
            <h3>MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION</h3>
            <p>Mytheresa is the most-trusted source for finding the finest selection of luxurious womenswear. Our expert buying team travels the globe with a simple mission: to bring international fashion’s finest directly to your doorstep. With our runway-fresh new arrivals every week, an easy-to-navigate platform and a mobile app to shop on-the-go, we ensure a boutique-like feeling for a unique shopping experience.</p>
        </div>
        <div>
            <div>
                <h3>A LUXURY SHOPPING EXPERIENCE</h3>
                <ul>
                    <li>The finest edit of more than 200 international luxury brands</li>
                    <li>900 new arrivals each week directly from the runway</li>
                    <li>Well-curated selection of items for a boutique-like shopping experience</li>
                    <li>Exclusive designer collaborations and capsule collections that you won’t find anywhere else</li>
                </ul>
            </div>
            <div>
                <h3>SERVICE AND QUALITY</h3>
                <ul>
                    <li>Authentic products guaranteed</li>
                    <li>Fast, reliable delivery within 3 business days</li>
                    <li>Free returns and exchanges within 30 days</li>
                    <li>Exceptional customer service available 24 hours a day, 7 days a week in 13 different languages</li>
                </ul>
            </div>
          </div>
          <div>
            <div>
                <p>Whether you are looking for the latest Bottega Veneta pouch for everyday wear, Jimmy Choo heels for an upcoming wedding, or a Burberry scarf to gift a friend, our edit comprises the key pieces that you need for an elegant season ahead. With our assortment of timeless items and exclusive capsule collections, which includes everything from the understated luxury of Loro Piana and avant-garde appeal of Maison Margiela, to Saint Laurent bags and time-honored Gucci loafers; you are certain to find everything you want to build your dream closet.</p>
                <p>Get inspired by our coveted edit, which makes occasion dressing easy by breaking down our buy into easy-to-shop categories such as fashion sneakers or exquisite gowns. Delve into our exclusive selection of designer must-haves. Our exceptional customer service team is here to help you through every step of the order process, and beyond, to make sure you start every day dressed to conquer.</p>
                <p>Shop with us and discover why Mytheresa is your final destination for online shopping for women.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default WomensPage;
