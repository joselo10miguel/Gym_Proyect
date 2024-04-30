import styles from "./footer.module.css";
import logoIcon from "../../assets/ico2.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={styles.footer_image}>
  
      </div>
      <div className={`${styles.footer_content} container `}>
        <div>
          <div className={styles.logo_holder}>
            <img src={logoIcon} alt="Logo Icon" />

            <h3>INFINITYFITNESS</h3>
          </div>
          <p>
          Hacemos de lo imposible, algo simple.
          </p>
          <div className={styles.info}>
            <span>Celular :</span>
            <p>0981693799</p>
            <span>Email :</span>
            <p>mustafakhaledinfo@gmail.com</p>
          </div>
        </div>
       
        <div>
          <h3>Siguenos en</h3>
         
          <div className={styles.footer_icons}>
          <br></br>
            <a
            
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100038990828791" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
