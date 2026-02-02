import "./Flex2.css";
import { FaTimes, FaHeart, FaStar, FaUser, FaBell } from "react-icons/fa";

const chipData = [
  { color: "gray", icon: <FaHeart /> },
  { color: "blue", icon: <FaStar /> },
  { color: "red", icon: <FaUser /> },
  { color: "green", icon: <FaHeart /> },
  { color: "yellow", icon: <FaBell /> },
];

function Flex2() {
  return (
    <div className="chip-container">
      {chipData.map((chip, index) => (
        <div className="chip-row" key={index}>
          <div className={`chip smooth ${chip.color}`}>
            Smooth <FaTimes className="close-icon" />
          </div>

          <div className={`chip user ${chip.color}`}>
            <img
              src={`https://i.pravatar.cc/40?img=${index + 5}`}
              alt="user"
            />
            Mr. Userpic
          </div>

          <div className={`chip icon ${chip.color}`}>
            {chip.icon}
            Icon Chip
          </div>
        </div>
      ))}
    </div>
  );
}

export default Flex2;
