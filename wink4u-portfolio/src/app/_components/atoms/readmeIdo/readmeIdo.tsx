import { reademeWhatIdoData } from "@/app/_types/readme";
import Image from "next/image";
import styles from "./readmeIdo.module.scss";

interface readmeIdoProps {
    readmeWhatIdo: reademeWhatIdoData[];
}


export default function ReadmeIdo({ readmeWhatIdo } : readmeIdoProps) {
    return(
        <div className={styles.idoContainer}>
          <p className={styles.idoTitle}>⭐ What I Do</p>
          {readmeWhatIdo.map((ido) => (
            <div key={ido.id}>
              <div className={styles.idoImgContainer}>
                {ido.whatIdoImg.map((image, idx) => (
                    <Image src={image} alt="img" key={idx} className={styles.idoImg} loading="lazy"/>
                ))}
              </div>
              <div className={styles.idoDescribe}>
                {ido.whatIdoContent.map((content, idx) => (
                  <div key={idx} className={styles.idoDescribetitle}>
                      <p>{content.title}</p>
                      {content.idoSub.map((sub, idx) => (
                        <div key={idx} className={styles.idoSub}>
                          <p className={styles.idoSubTitle}>⦁ {sub.subTitle}</p>
                          {sub.ssubIdo && sub.ssubIdo.length > 0 && (
                            <div className={styles.idoSsub}>
                              {sub.ssubIdo.map((ssub, ssubIdx) => (
                                <p key={ssubIdx} className={styles.idoSsubTitle}>∘ {ssub.ssubTitle}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    )
}