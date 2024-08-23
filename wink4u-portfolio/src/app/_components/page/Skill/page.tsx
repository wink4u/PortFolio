import Title from "../../atoms/title/title";
import SkillTemplate from "../../template/SkillTemplate/skillTemplate";
import SkillContent from "../../organisms/skillContent/skillContent";
import MoveDetail from "../../atoms/moveDetail/moveDetail";
export default function Skill() {
    return(
      <SkillTemplate>
        <Title value="SKILL" color="white" />
        <MoveDetail href="/skill/describe" back="rgb(29, 155, 240)" />
        <SkillContent />
      </SkillTemplate>
    )
}