import { projectSkill, projectWhat } from '@/app/_types/project';
import styles from './projectDescribe.module.scss';

interface projectDescribeProps {
    skill: projectSkill;
    whatIdid: projectWhat[];
}


export default function projectDescribe({skill, whatIdid} : projectDescribeProps) {
    return(
        <div className={styles.projectDescribeContainer}>
          <div className={styles.projectDescribeMain}>
            <h2 className={styles.projectDescribeTitle}>WHAT I DID</h2>
            {whatIdid.map(what => (
              <div key={what.id} className={styles.projectWhatMain}>
                <h3 className={styles.projectWhatMainTitle}>{what.main}</h3>
                {what.sub.map(sub => (
                  <div key={sub.id} className={styles.projectWhatSub}>
                    <h4>{sub.sub}</h4>
                    {sub.ssub && (
                      <ul className={styles.projectWhatSsub}>
                        {sub.ssub.map((ssub, index) => (
                          <li key={index}>- {ssub}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.projectListMain}>
            <h2 className={styles.projectListTitle}>SKILL</h2>
            <ul className={styles.projectWhatSkill}>
              <li><strong>⭐ Frontend:</strong> {skill.Frontend}</li>  
              {skill.Backend && <li><strong>⭐ Backend:</strong> {skill.Backend}</li>}         
              <li><strong>⭐ DevOps:</strong> {skill.DevOps}</li>
            </ul>
          </div>
        </div>
    )
}