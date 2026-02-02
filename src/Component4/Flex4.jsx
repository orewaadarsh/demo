import "./Flex4.css";
import s1 from "./bean.jpeg";
import s2 from "./garden.jpeg";
import c1 from "./chickenwings.jpeg";
import { FaHamburger } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaPizzaSlice } from "react-icons/fa6";
import { TbSalad } from "react-icons/tb";





function Flex4() {
  return (
    <div className="menu-container">


      <div className="menu-tabs">
        <div className="menu-list">
        <span>ALL</span>
        <span>BURGER<FaHamburger/></span>
        <span>COFFEE<FaCoffee/></span>
        <span className="active">FAST FOOD<IoFastFood/></span>
        <span>PIZZA<FaPizzaSlice/></span>
        <span>SALAD<TbSalad/></span>
        </div>

      </div>


      <div className="card-container">

        <div className="card">
          <img src={s1} alt="Bean Salad" />
          <h3>BEAN SALAD</h3>
          <p className="price">£20.00</p>
          <p className="desc">
            Sed vulputate vestibulum leo, sed vulputate ipsum rutrum ut.
          </p>
          <button>ORDER</button>
        </div>

        <div className="card">
          <div className="ribbon">★★★★★</div>
          <img src={s2} alt="Garden Salad" />
          <h3>GARDEN SALAD</h3>
          <p className="price">£30.00</p>
          <p className="desc">
            Aenean lorem augue, volutpat vitae pulvinar at tristique.
          </p>
          <button className="orange">ORDER</button>
        </div>

        <div className="card">
          <img src={c1} alt="Chicken Wings" />
          <h3>FRIED CHICKEN WINGS</h3>
          <p className="price">£6.00</p>
          <p className="desc">
            Cras suscipit magna eget turpis tristique tincidunt lacus.
          </p>
          <button>ORDER</button>
        </div>

      </div>
    </div>
  );
}

export default Flex4;
