import "./Flex10.css";

function Flex10() {
  return (
    <div className="app">
    
      <div className="left">
    
        <div className="header">
          <h2>Kans Resto</h2>
          <input type="text" placeholder="Find food or beverages" />
        </div>

      
        <h3 className="section-title">Special Discount Today</h3>
        <div className="discount">
          {[
            { name: "Tomato with Tofu Salad", price: "Rp 77.500,00" },
            { name: "Japanese Chicken Gyoza", price: "Rp 81.700,00" },
            { name: "2pcs of Amazing Avocado", price: "Rp 68.000,00" },
            { name: "Lettuce with Stuff", price: "Rp 170.000,00" },
          ].map((item, i) => (
            <div className="discount-card" key={i}>
              <div className="img-box"></div>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button>Order</button>
            </div>
          ))}
        </div>

         
        <h3 className="section-title">Explore Our Best Menu</h3>
        <div className="tabs">
          <button className="active">All</button>
          <button>Main Course</button>
          <button>Appetizer</button>
          <button>Dessert</button>
          <button>Beverages</button>
          <button>Kids</button>
        </div>

        <div className="menu">
          {[
            "Biscuit Mama with Susu",
            "Krosang Thats It",
            "Strawberry Float",
            "Healthy Kids Meal",
            "Manggo Cereal Milk",
            "Smoothie Brown Berry",
            "Rainbow Cupcake",
            "Mie Gorengan Spicy",
          ].map((item, i) => (
            <div className="menu-card" key={i}>
              <div className="img-box"></div>
              <h4>{item}</h4>
              <p>Rp 95.000,00</p>
              <button>Order</button>
            </div>
          ))}
        </div>
      </div>

       <div className="right">
        <h3>Customer Information</h3>

        <div className="info-box">
          <label>Customer name</label>
          <input type="text" value="Emir Abiyy" readOnly />
          <label>Number of person</label>
          <div className="counter">
            <button>-</button>
            <span>12 Person Table</span>
            <button>+</button>
          </div>
        </div>

        <h3>Current Order</h3>

        <div className="order-list">
          <div className="order-item">
            <p>Japanese Chicken Gyoza</p>
            <span>Rp 81.700,00</span>
          </div>
          <div className="order-item">
            <p>2pcs of Amazing Avocado</p>
            <span>Rp 68.000,00</span>
          </div>
          <div className="order-item">
            <p>Healthy Kids Meal</p>
            <span>Rp 83.000,00</span>
          </div>
        </div>

        <div className="summary">
          <div>
            <span>Subtotal</span>
            <span>Rp 1.298.000,00</span>
          </div>
          <div>
            <span>Discount sales</span>
            <span>-Rp 120.000,00</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>Rp 1.218.000,00</span>
          </div>
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Flex10;
