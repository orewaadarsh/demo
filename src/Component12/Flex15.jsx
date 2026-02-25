
import "./Flex15.css";

import salad1 from "./burger.jpeg";
import salad2 from "./salad.png";
import salad3 from "./dressing.jpeg";
import salad4 from "./cashew chicken.jpeg";
// import coke from "./coke.jpeg";
import coke from "./coka.png";

import steak from "./steak.jpeg";
import pizza from "./pizza.jpeg";
import cashew from "./cashew salad.jpeg";
// import bannerImg from "./banner.jpeg";
import bell from "./bell fresh.jpeg";

function Flex15() {
  return (
    <div className="container">

       <div className="left">

        <div className="header">
          <div className="menuIcon">☰</div>
          <input type="text" placeholder="Search" className="search" />
          <div className="headerIcons">
            <div className="icon">🔔</div>
            <div className="icon">🛒</div>
          </div>
        </div>

         <div className="banner">
          {/* <div className="ban">
          <img src={bannerImg} alt="" />
          </div> */}
          <div className="bannerLeft">
            
            <img src={bell} alt="" />
            <div>
              <p>Bell fresh</p>
              
              <p>Fresh & healthy food recipe</p>
            </div>
          </div>

          <div className="bannerRight">
            <div>
              <h3>24</h3>
              <p>Total item</p>
            </div>
            <div>
              <h3>09</h3>
            <p>Category</p>
            </div>
            <div>
              <h3>04</h3>
              <p>Outlet</p>
            </div>
          </div>
        </div>

         <div className="categories">
          <div className="cat active">
            <div className="catImg">
              <img src={salad1} alt="" />
            </div>
            <p>Salad</p>
          </div>

          <div className="cat">
            <div className="catImg">
              <img src={pizza} alt="" />
            </div>
            <p>Pizza</p>
          </div>

          <div className="cat">
            <div className="catImg">
              <img src={steak} alt="" />
            </div>
            <p>Steak Meat</p>
          </div>

          <div className="cat">
            <div className="catImg">
              <img src={coke} alt="" />
            </div>
            <p>Drinks</p>
          </div>
        </div>

         <h3 className="title">Popular Dish</h3>

        <div className="dishes">

          <div className="card">
            <div className="cardImg">
              <img src={salad2} alt="" />
            </div>
            <h4>Fresh and Health Salad</h4>
            <p>60 calories • 4 persons</p>
            <div className="priceRow">
              <span>$2.65</span>
              <button>+</button>
            </div>
          </div>

          <div className="card highlight">
            <div className="cardImg">
              <img src={cashew} alt="" />
            </div>
            <h4>Cashew Nut Chicken Salad</h4>
            <p>60 calories • 4 persons</p>
            <div className="priceRow">
              <span>$2.65</span>
              <button>+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src={salad3} alt="" />
            </div>
            <h4>Crunchy Cashew Salad</h4>
            <p>60 calories • 4 persons</p>
            <div className="priceRow">
              <span>$2.65</span>
              <button>+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src={salad4} alt="" />
            </div>
            <h4>Sesame Salad</h4>
            <p>60 calories • 4 persons</p>
            <div className="priceRow">
              <span>$2.65</span>
              <button>+</button>
            </div>
          </div>

        </div>
      </div>

       <div className="right">

        <h3>My cart</h3>

        <div className="cartItem">
          <div className="itemImg">
            <img src={cashew} alt="" />
          </div>
          <div className="itemInfo">
            <p>2 x Crunchy Cashew</p>
            <span>$3.65</span>
          </div>
        </div>

        <div className="cartItem">
          <div className="itemImg">
            <img src={coke} alt="" />
          </div>
          <div className="itemInfo">
            <p>3 x Coke</p>
            <span>$2.65</span>
          </div>
        </div>

        <div className="cartItem">
          <div className="itemImg">
            <img src={steak} alt="" />
          </div>
          <div className="itemInfo">
            <p>1 x Steak meat</p>
            <span>$2.65</span>
          </div>
        </div>

        <div className="cartItem">
          <div className="itemImg">
            <img src={pizza} alt="" />
          </div>
          <div className="itemInfo">
            <p>1 x Pizza</p>
            <span>$2.65</span>
          </div>
        </div>

        <div className="summary">
          <p>Final <span>$15.50</span></p>
          <p>Discount <span className="green">-$1.00</span></p>
          <h4>Total $14.50</h4>
        </div>

        <button className="checkout">Checkout</button>

      </div>

    </div>
  );
}

export default Flex15;
