import { Link, useNavigate } from "react-router-dom";
import { fitnessTrainingData } from "../../data/data";

import styles from "./fitness.module.css";

const FitnessTraining = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles["fitness-training"]} container sections-padding`}>
      <div className={styles["section-head"]}>
        <div>
          <p className="paragraph">Ofrecemos 3 tipos de máquinas</p>
          <h2>Upcoming Classes</h2>
        </div>
     
      </div>
      <div className={styles["boxes-container"]}>
        {fitnessTrainingData.map((el) => {
          return (
            <div
              key={el.id}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <img src={el.image} alt="women in gym" />
              <h3>{el.title}</h3>
              <p>{el.description} </p>
              <Link to={el.to}>Read More</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FitnessTraining;
