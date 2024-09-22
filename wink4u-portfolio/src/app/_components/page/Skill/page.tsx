import Title from "../../atoms/title/title";
import SkillTemplate from "../../template/SkillTemplate/skillTemplate";
import SkillContent from "../../organisms/skillContent/skillContent";
import MoveDetail from "../../atoms/moveDetail/moveDetail";
import CommonLayout from "../../template/CommonLayout/CommonLayout";

export default function Skill() {
    return(
      <CommonLayout>
        <SkillTemplate>
          <Title value="SKILL" color="white" />
          <MoveDetail href="/skill/describe" back="white" color="#ff8a00" content='Stack Detail'/>
          <SkillContent />
        </SkillTemplate>
      </CommonLayout>
    )
}