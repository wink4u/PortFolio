import Title from "../../atoms/title/title";
import SkillList from "../../molecules/skillList/skillList";
import Skill from '@/app/(main)/_constants/skill';

export default function skillContent() {
    return (
        <div>
          <Title value="skill" />
          <div>
            <div>
              <SkillList skills={Skill.FRONTEND_LIST} />
            </div>
            <div>
              <SkillList skills={Skill.BACKEND_LIST} />
              <SkillList skills={Skill.MOBILE_LIST} />
            </div>
            <div>
              <SkillList skills={Skill.VERSION_LIST} />
              <SkillList skills={Skill.COMMUNICATION_LIST} />
            </div>
          </div>
        </div>
    )
}