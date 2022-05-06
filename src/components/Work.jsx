import { Cards } from './Cards';
import styles from './Work.module.css';
export function Work(){
    return(
        <div className={styles.container}>
            <section className={styles.containerTitle}>
                <p class={styles.numberTitle}>0.3</p>
                <p class={styles.Title}> Experience </p>
                <div className={styles.lineTitle}/>
            </section>
            <section className={styles.containerWork}>
                <Cards/>
                <div className={styles.comingSoon}>
                    <h1>Coming Soon....</h1>
                </div>
            </section>
        </div>
    );
}