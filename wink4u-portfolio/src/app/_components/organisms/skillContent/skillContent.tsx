import SkillList from "../../molecules/skillList/skillList";
import FE from "@/img/skill_img/FE_img.png"
import BE from "@/img/skill_img/BE_img.png"
import MOBILE from "@/img/skill_img/Mobile_img.png"
import DEV from "@/img/skill_img/Version_img.png"
import COMMUINATION from "@/img/skill_img/Communication_img.png"
import styles from './skillcontent.module.scss';

export default function skillContent() {
    return (
      <div className={styles.skillContentSkills} >
        <div className={styles.skillContentItems}>
          <SkillList img={FE} subTitle="Front-End"/>
        </div>
        <div className={styles.skillContentItems}>
          <SkillList img={BE} subTitle="Back-End"/>
          <SkillList img={MOBILE} subTitle="Mobile"/>
        </div>
        <div className={styles.skillContentItems}>
          <SkillList img={DEV} subTitle="Version"/>
          <SkillList img={COMMUINATION} subTitle="Communication"/>
        </div>
      </div>
    )
}