import Image from "next/image";
import { readmeIntroData } from "@/app/_types/readme";
import styles from "./reademeIntroduce.module.scss";

interface ReadmeIntroduceProps{
  readmeIntro: readmeIntroData;
}

export default function ReadmeIntroduce({readmeIntro} : ReadmeIntroduceProps) {
    return (
        <div className={styles.introduceContainer}>
          <p className={styles.introduceTitle}>✍ Introduce</p>
          <div className={styles.introduceContent}>
            <Image src={readmeIntro.introImg} alt="img" className={styles.introduceImg}/>
            <div className={styles.introduceDescribe}>
              {readmeIntro.introContent.map((content, idx) => (
                <div key={idx}>
                  ⦁ {content}
                </div>
              ))
              }
              
              {readmeIntro.introfunction && readmeIntro.introfunction.length > 0 && (
                <div className={styles.introduceDescribe}>
                  <p>주요기능</p>
                  {readmeIntro.introfunction.map((content, idx) => (
                    <div key={idx}>
                      - {content}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
    )
}