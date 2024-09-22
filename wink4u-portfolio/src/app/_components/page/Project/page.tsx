import Title from "../../atoms/title/title";
import ProjectTemplate from "../../template/ProjectTemplate/projectTemplate";
import ProjectList from "../../molecules/projectList/projectList";
import CommonLayout from '../../template/CommonLayout/CommonLayout';

export default function Project() {
    return (
      <CommonLayout>
        <ProjectTemplate>
          <Title value="PROJECT" color="white"/>
          <ProjectList />
        </ProjectTemplate>
      </CommonLayout>
    )
}