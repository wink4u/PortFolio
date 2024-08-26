'use client';

import { useEffect, useState } from 'react';
import { projectItem } from "@/app/_types/project";
import ContentBox from "../../atoms/contentBox/contentBox";
import SlideButtonList from "../../molecules/slideButtonList/slideButtonList";
import ProjectDescribe from "../../molecules/projectDescribe/projectDescribe";
import styles from './projectContent.module.scss';

interface projectContentProps {
  project: projectItem;
}
export default function projectContent({project} : projectContentProps) {
    const [boxWidth, setBoxWidth] = useState("1150px");

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 1312) {
          setBoxWidth("800px");
        } else {
          setBoxWidth("1150px");
        }
      };

      handleResize(); // 초기 실행
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return(
      <ContentBox boxWidth={boxWidth}>
        <div className={styles.pjTitle}>
          <p className={styles.projectName}>{project.name}</p>
          <div className={styles.projectDate}>
            <p>{project.date}</p>
            <p>{project.member}</p>
          </div>
          <h3 className={styles.projectDescribe}>{project.describe}</h3>
        </div>
        <div className={styles.pjContent}>
          <SlideButtonList images={project.imgs} />
          <div>
            <ProjectDescribe skill={project.skill} whatIdid={project.whatIdid} />
          </div>
        </div>
      </ContentBox>
    )
}