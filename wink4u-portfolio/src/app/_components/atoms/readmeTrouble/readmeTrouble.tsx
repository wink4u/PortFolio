import { readmeTroubleData } from "@/app/_types/readme";
import Image from "next/image";
import styles from "./readmeTrouble.module.scss";

interface readmeTroubleProps {
    readmeTrouble: readmeTroubleData[];
}

export default function ReadmeTrouble({ readmeTrouble }: readmeTroubleProps ) {
    return(
        <div className={styles.troubleContainer}>
          <p className={styles.troubleTitle}>👍 Trouble Shooting</p>
          {readmeTrouble.map((trouble) => (
            <div key={trouble.id} className={styles.troubleContent}>
              <p className={styles.troubleTitle}>{trouble.id + 1}. {trouble.title}</p>
              <div>
                {trouble.troubleList.map((troubleContent) => (
                  <div key={troubleContent.id}>
                    {troubleContent.Img && troubleContent.Img.length > 0 && (
                      <div className={styles.troubleImgContainer}>
                        {troubleContent.Img.map((image, idx) => (
                          <Image src={image} alt="img" key={idx} className={styles.troubleImg} />
                        ))}
                      </div>
                    )}
                    <p className={styles.troubleContent}>{troubleContent.content}</p>
                  </div>
                ))}
              </div>
              <p className={styles.solutionTitle}>해결 방법 ! </p>
              <div className={styles.solutionContent}>
                {trouble.solutionList.map((solutionContent) => (
                  <div key={solutionContent.id}>
                    {solutionContent.Img && solutionContent.Img.length > 0 && (
                      <div className={styles.solutionImgContainer}>
                        {solutionContent.Img.map((image, idx) => (
                          <Image src={image} alt="img" key={idx} className={styles.solutionImg}/>
                        ))}
                      </div>
                    )}
                    <p className={styles.solutionContent}>{solutionContent.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    )
}