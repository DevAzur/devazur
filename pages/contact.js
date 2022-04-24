import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Contact,</h1>
      </div>
      <div className={styles.form_container}>
        <form className={styles.form}>
          <input
            id="name"
            type="text"
            inputMode="text"
            autoComplete="name"
            required
            placeholder="YOUR NAME"
            className={styles.input}
          />
          <input
            id="email"
            inputMode="email"
            type="email"
            autoComplete="email"
            required
            placeholder="YOUR EMAIL"
            className={styles.input}
          />
          <input
            id="message"
            type="text"
            inputMode="text"
            autoComplete="message"
            required
            placeholder="YOUR MESSAGE"
            className={styles.input}
          />
          <button type="submit" className={styles.form_btn}>SEND</button>
        </form>
      </div>
    </div>
  );
};
