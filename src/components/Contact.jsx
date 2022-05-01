import styles from './Contact.module.css'
export function Contact(){
    return(
        <div className={styles.containerContact}>
            <section className={styles.containerForm}>
                <h2>05. Contact me</h2>
                <div className={styles.lineForm}/>
                <form>
                    <label for="name" className={styles.label}>Name</label><br/>
                    <input className={styles.name} name="name" id="name" type="text" placeholder="Enter your name"/><br/>
                    <label for="email" className={styles.label}>Email</label><br/>
                    <input className={styles.email} name="email" id="email" type="text" placeholder="Enter your Email"/><br/>
                    <label for="message" className={styles.label}>Message</label><br/>
                    <textarea className={styles.message} name="message" id="messgae" placeholder="Enter your Message"/><br/>
                    <button className={styles.button}>Enviar</button>
                </form>
            </section>
        </div>
    );
}