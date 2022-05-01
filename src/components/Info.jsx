import styles from "./Info.module.css";

import curriculum from '../archieves/Curriculum-vitae.pdf';
export function Info(){
 return(
     <div className={styles.container}>
         <section className={styles.section}>
            <p>Hi,  my name is</p><br/>
            <span className={styles.name}>John Gualteros</span>
            <h1 className={styles.subtitle}>I build things for the web.</h1>
            <br/>
            <p className={styles.description}>I am a self-employed web developer, although I also studied in a Colombian institution. I like both the front end and back end, and I am sure that I will be able to contribute maintainability and support to your projects.</p>
            <a href={curriculum} Download="CurriculumJohn"><button className={styles.buttonNav}>Download CV</button></a>
         </section>
     </div>
 )
}