import { useNavigate } from "react-router-dom";

import styles from "./trainers.module.css";
import photo from "../../assets/trainerslast.jpg";

const CtaSection = () => {
  const navigate = useNavigate();

  const navHandler = () => {
    navigate("/classes");
  };

 
};

export default CtaSection;
