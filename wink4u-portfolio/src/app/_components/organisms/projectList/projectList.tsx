import ProjectData from "@/app/_constants/project"
import ProjectContent from "../projectContent/projectContent"
import styles from './projectList.module.scss';

export default function ProjectList() {
    return(
        <div className={styles.ProjectListContainer}>
            {ProjectData.map(content => (
                <ProjectContent key={content.id} project={content.project}/>
            ))}
        </div>
    )
}