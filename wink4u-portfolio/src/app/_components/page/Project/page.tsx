import Title from "../../atoms/title/title";
import ProjectTemplate from "../../template/ProjectTemplate/projectTemplate";
import ProjectList from "../../organisms/projectList/projectList";

export default function Project() {
    return (
        <ProjectTemplate>
          <Title value="PROJECT" color="white"/>
          <ProjectList />
        </ProjectTemplate>
    )
}