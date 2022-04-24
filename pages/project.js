import styles from "../styles/Project.module.css";
import { gsap } from "gsap";

const project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Work,</h1>
      </div>
      <div className={styles.project_container}>
        <div className={styles.project}>
          <div className={styles.project_title_container}>
            <h1 className={styles.project_title}>1</h1>
          </div>
          <div className={styles.project_view}></div>
        </div>
        <div className={styles.project_2}>
          <div className={styles.project_title_container_2}>
            <h1 className={styles.project_title}>2</h1>
          </div>
          <div className={styles.project_view}></div>
        </div>
        <div className={styles.project}>
          <div className={styles.project_title_container}>
            <h1 className={styles.project_title}>3</h1>
          </div>
          <div className={styles.project_view}></div>
        </div>
      </div>
    </div>
  );
};

export default project;
