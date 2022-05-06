import styles from "./Redes.module.css";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaCodepen} from "react-icons/fa";
export function Redes(){
    return(
        <>
        <div className={styles.container}>
            <a className={styles.email}>gualterosjohn40@gmail.com</a>
            <div className={styles.line}/>
        </div>
        <div className={styles.containerIcons}>
            <a className={styles.icon} href="https://github.com/johngualteros" target="_blank"><FaGithub/></a><br/>
            <a className={styles.icon} href="https://www.instagram.com/john_gualteos_12" target="_blank"><FaInstagram/></a><br/>
            <a className={styles.icon} href="https://codepen.io/johngualteros" target="_blank"><FaLinkedin/></a><br/>
            <a className={styles.icon} href="https://www.linkedin.com/in/john-gualteros-518bba22b/" target="_blank"><FaCodepen/></a><br/>
            <div className={styles.lineIcons}/>
        </div>
    </>
    );
}