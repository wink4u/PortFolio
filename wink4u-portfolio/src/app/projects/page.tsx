import Project from "../_components/page/Project/page";
import styles from "./project.module.scss";

export default function ProjectPage() {
    return(
        <div className={styles.projectContainer}>
          <Project />
        </div>
    )
}