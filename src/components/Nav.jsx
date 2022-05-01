import logo from '../img/logoPortoflio.svg';
import styles from "./Nav.module.css";
export function Nav(){
    return(
        <nav className={styles.containerNav}>
            <img src={logo} className={styles.logo}/>
            <div className={styles.containerlinks}>
                <p className={styles.link}>01.<a href="#">Home</a></p>
                <p className={styles.link}>02.<a href="#">About</a></p>
                <p className={styles.link}>03.<a href="#">Experience</a></p>
                <p className={styles.link}>04.<a href="#">Work</a></p>
                <p className={styles.link}>05.<a href="#">Contact</a></p>
            </div>
        </nav>
    )
}