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
            <a className={styles.icon}><FaGithub/></a><br/>
            <a className={styles.icon}><FaInstagram/></a><br/>
            <a className={styles.icon}><FaTwitter/></a><br/>
            <a className={styles.icon}><FaLinkedin/></a><br/>
            <a className={styles.icon}><FaCodepen/></a><br/>
            <div className={styles.lineIcons}/>
        </div>
    </>
    );
}