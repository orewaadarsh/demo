import "./Flex5.css";

import hh from "./bulb.jpeg";
import he from "./bus.jpeg";
import hr from "./car rent.jpeg";
import ht from "./dth.jpeg";
import hy from "./flight.jpeg";
import hu from "./gas.jpeg";
import hi from "./hotel.jpeg";
import ho from "./insurance.jpeg";
import hp from "./mobile.jpeg";
import ha from "./train.jpeg";
import hs from "./water.jpeg";

function Flex5() {
  return (
    <div className="flex5-container">

      <div className="section">
        <div className="section-left">
          <h2>Bills & Recharge</h2>
          <p>Pay your bills & recharge instantly with Justdial</p>
          <span className="explore">Explore More</span>
        </div>

        <div className="section-right">
          <div className="item">
            <img src={hp} alt="Mobile" />
            <p>Mobile</p>
          </div>
          <div className="item">
            <img src={hh} alt="Electricity" />
            <p>Electricity</p>
          </div>
          <div className="item">
            <img src={ht} alt="DTH" />
            <p>DTH</p>
          </div>
          <div className="item">
            <img src={hs} alt="Water" />
            <p>Water</p>
          </div>
          <div className="item">
            <img src={hu} alt="Gas" />
            <p>Gas</p>
          </div>
          <div className="item">
            <img src={ho} alt="Insurance" />
            <p>Insurance</p>
          </div>
        </div>
      </div>

      <hr />

 
      <div className="section">
        <div className="section-left">
          <h2>Travel Bookings</h2>
          <p>Instant ticket bookings for your best travel experience</p>
          <span className="explore">Explore More</span>
        </div>

        <div className="section-right">
          <div className="item">
            <img src={hy} alt="Flight" />
            <p>Flight</p>
            <small className="green">Powered By Easemytrip.com</small>
          </div>
          <div className="item">
            <img src={he} alt="Bus" />
            <p>Bus</p>
            <small className="green">Affordable Rides</small>
          </div>
          <div className="item">
            <img src={ha} alt="Train" />
            <p>Train</p>
          </div>
          <div className="item">
            <img src={hi} alt="Hotel" />
            <p>Hotel</p>
            <small className="green">Budget-friendly Stay</small>
          </div>
          <div className="item">
            <img src={hr} alt="Car Rentals" />
            <p>Car Rentals</p>
            <small className="green">Drive Easy Anywhere</small>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Flex5;
