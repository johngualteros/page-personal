import styles from "./About.module.css";
import {FaArrowRight} from "react-icons/fa";
import logo from "../img/logoPersonal.png";
export function About(){
    return(
        <div className={styles.container}>
            <section className={styles.section}>
               <p className={styles.numberTitle}>0.2 </p>
               <p className={styles.title}><strong>About Me</strong> <div className={styles.lines}/></p>
               <div className={styles.line}/>
               <article className={styles.text}>
                   <p>Hello! My name is John Gualteros. I am a person who studied at a programming training center, although I am also self-taught. I love learning new things and I enjoy creating things that live on the Internet. My interest in web development started in 2019 when I decided to try to copy or invent web designs.</p><br/>
                    <p>Fast forward to today, and I have had the privilege of continuing to learn on my own, falling in love with the different programming languages ​​out there and wanting every day to demonstrate my discipline and interest.</p><br/>
                    <p>Recently, I also started a new challenge to learn azure with the free microsoft course and learn advanced python 
                    <a> Psss by the way this portfolio is made in Reactjs</a></p>
                    <br/>
                    <p>Here are some technologies I've recently learned with:</p>
                </article>
               <span className={styles.image} >
                   <img src={logo} className={styles.imageLogo} alt="logo"/>
                   <div className={styles.borderImg}/>
               </span>
               <section className={styles.infoTecnologies}>
                   <section>
                       <p><FaArrowRight className={styles.icon}/> JavaScript (ES6+)</p>
                       <p><FaArrowRight className={styles.icon}/> React</p>
                       <p><FaArrowRight className={styles.icon}/> Tailwind</p>
                    </section>
                   <section>
                       <p><FaArrowRight className={styles.icon}/> Java</p>
                       <p><FaArrowRight className={styles.icon}/> Laravel</p>
                       <p><FaArrowRight className={styles.icon}/> Python</p>
                    </section>
               </section>
            </section>
        </div>
    );
}