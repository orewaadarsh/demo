import "./Flex.css";
import { useState } from "react";
import { FaFireAlt, FaPen } from "react-icons/fa";
import { VscCheck } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { FcPlus } from "react-icons/fc";

function Flex() {
  const [cardCount, setCardCount] = useState(0);

  const handleAddCard = () => {
    if (cardCount < 3) {
      setCardCount(cardCount + 1);
    }
  };

  return (
    <div className="main">

 
      {cardCount >= 1 && (
        <div className="box1">
          <div className="box11">
            <div className="box111"><div className="a1"><FaFireAlt /></div></div>
            <div className="box112"><p>Take out the trash</p></div>
            <div className="box113"><div className="a11"><FaPen /><VscCheck /><MdDelete /></div></div>
          </div>
          <div className="box12">
            <div className="box9">
              <p>It's very important to take the trash otherwise it's ruined</p>
            </div>
            <div className="box8"><button>23/05/2019</button></div>
          </div>
        </div>
      )}
 
      {cardCount >= 2 && (
        <div className="box1">
          <div className="box21">
            <div className="box122"><div className="A1"><FaFireAlt /></div></div>
            <div className="box123"><p>Code a todo app</p></div>
            <div className="box124"><div className="A11"><FaPen /><VscCheck /><MdDelete /></div></div>
          </div>
          <div className="box22">
            <button>23/05/2019</button>
          </div>
        </div>
      )}

 
      {cardCount >= 3 && (
        <div className="box1">
          <div className="box31">
            <div className="box132"><div className="A111"><FaFireAlt /></div></div>
            <div className="box133"><p>Learn Adobe softwares</p></div>
            <div className="box134"><div className="A1111"><FaPen /><VscCheck /><MdDelete /></div></div>
          </div>
          <div className="box32">
            <div className="box10">
              <p>Illustrator | Premiere | After Effects</p>
            </div>
            <div className="box11"><button>23/05/2019</button></div>
          </div>
        </div>
      )}

 
      <div
        className="box1"
        onClick={handleAddCard}
        style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }}
      >
        <FcPlus size={40} />
      </div>

    </div>
  );
}

export default Flex;
