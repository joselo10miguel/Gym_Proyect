import { useNavigate } from "react-router";
import styles from "./home.module.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["hero-section"]} data-aos="zoom-out-down">
      <h1 className="main-heading">
      
       El éxito es conseguir lo que quieres, 
        <br />
        la felicidad es disfrutar lo que tienes.
      </h1>
      <div>
        
      </div>
    </div>
  );
};

export default HeroSection;
