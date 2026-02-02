import "./Flex3.css";
import hh from "./ac.jpeg"
import hm from "./banquet.jpeg"
import hs from "./bridal.jpeg"
import he from "./caterers.jpeg"
import hr from "./parlour.jpeg"
import ht from "./salon.jpeg"
import hy from "./spa.jpeg"
import hu from "./car.jpeg"
import hi from "./bike.jpeg"
import ho from "./movies.jpeg"
import hp from "./grocery.jpeg"
import ha from "./electrician.jpeg"

function Flex3() {
  return (
    <div className="flex3-container">

      <div className="flex3-box">
        <h3>Wedding Requisites</h3>
        <div className="flex3-row">
          <div className="flex3-item"><img src={hm}/></div>
          <div className="flex3-item"><img src={hs}/></div>
          <div className="flex3-item"><img src={he}/></div>
        </div>
      </div>

      <div className="flex3-box">
        <h3>Beauty & Spa</h3>
        <div className="flex3-row">
          <div className="flex3-item"><img src={hr}/></div>
          <div className="flex3-item"><img src={ht}/></div>
          <div className="flex3-item"><img src={hy}/></div>
        </div>
      </div>

      <div className="flex3-box">
        <h3>Repairs & Services</h3>
        <div className="flex3-row">
          <div className="flex3-item"><img src={hh}/></div>
          <div className="flex3-item"><img src={hu}/></div>
          <div className="flex3-item"><img src={hi}/></div>
        </div>
      </div>

      <div className="flex3-box">
        <h3>Daily Needs</h3>
        <div className="flex3-row">
          <div className="flex3-item"><img src={ho}/></div>
          <div className="flex3-item"><img src={hp}/></div>
          <div className="flex3-item"><img src={ha}/></div>

      </div>
      
    

    </div>
    </div>
  );
}

export default Flex3;
