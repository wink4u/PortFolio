import Image from "next/image";
import ContentBox from "../../atoms/contentBox/contentBox";
import ARCHIVING_GITHUB from "@/img/archiving_img/ARCHIVE_GITHUB.webp"
import styles from "./archivingContent.module.scss"


export default function ArchivingContent() {
    return(
        <div className={styles.archiveContainer}>
          <ContentBox boxWidth="600px">
            <div className={styles.archiveMain}>
              <div className={styles.archiveValue}>
                <Image className={styles.archiveTitleImg} src={ARCHIVING_GITHUB} alt="archive" />
                <a className={styles.archiveTag} href="https://github.com/wink4u">github.com/wink4u</a>
                <div className={styles.archiveDescribe}>
                  <p className={styles.archiveTitle}>저의 프로젝트 및 알고리즘 공부 저장소</p>
                  <p className={styles.archiveNormal}>입니다.</p>
                </div>
                <div className={styles.archiveContent}>
                  <p>◼ JS 및 Python 알고리즘</p>
                  <p>◼ 개인 프로젝트 및 공부 소스 코드</p>
                  <p>◼ SSAFY (삼성 청년 소프트 아카데미) 팀 프로젝트 소스 코드</p>
                </div>
              </div>
            </div>
          </ContentBox>
        </div>
    )
}