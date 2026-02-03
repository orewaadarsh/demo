import "./Flex6.css";
import { FaWifi } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function Flex6() {
  return (
    <div className="pay-container">
      <div className="pay-box">
 
        <div className="pay-left">
          <h2 className="logo">AceCoin<span>Pay</span></h2>

          <div className="field">
            <label>Card Number</label>
            <div className="input-row">
              <input type="text" placeholder="2412  -  7512  -  3412  -  3456" />
              <MdEdit />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>CVV Number</label>
              <input type="password" placeholder="327" />
            </div>

            <div className="field">
              <label>Expiry Date</label>
              <div className="expiry">
                <input type="text" placeholder="09" />
                <span>/</span>
                <input type="text" placeholder="22" />
              </div>
            </div>
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>

          <button className="pay-btn">Pay Now</button>
        </div>

 
        <div className="pay-right">
          <div className="card">
            <FaWifi className="wifi" />
            <h3>Jonathan Michael</h3>
            <p>•••• 3456</p>
            <span>09 / 22</span>
          </div>

          <div className="summary">
            <div><span>Company</span><span>Apple</span></div>
            <div><span>Order Number</span><span>1266201</span></div>
            <div><span>Product</span><span>MacBook Air</span></div>
            <div><span>VAT (20%)</span><span>$100.00</span></div>
          </div>

          <h2 className="total">$549.99 <span>USD</span></h2>
        </div>

      </div>
    </div>
  );
}

export default Flex6;
