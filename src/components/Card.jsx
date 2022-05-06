import styles from './Card.module.css';

import {FaGithub} from "react-icons/fa";
export function Card({imageSource,title,text,url}){
    return(
        <div className={styles.containerCard}>
            <img src={imageSource} alt={title} className={styles.image}/>
            <div className={styles.bodyCard}>
                <h2>{title}</h2>
                <p>{text}</p>
                
                <a className={styles.link} href={url} target="_blank"><FaGithub/></a>
            </div>
        </div>
    );
}