import { skillStack } from "@/app/_constants/describe"
import styles from "./stackItem.module.scss";

interface stackItemProps {
    stack: skillStack;
}

export default function StackItem({ stack } : stackItemProps) {
    return(
        <div className={styles.StackItemContainer}>
          <header>{stack.title}</header>
          <div className={styles.StackContentsDiv}>
            <div className={styles.StackSkills}>
              {stack.skills.map((skill, idx) => (
                <p key ={idx}>{skill}</p>
              ))}
            </div>
            <div className={styles.StackContents}>
              {stack.contents.map((content, idx) => (
                <p key ={idx}>- {content}</p>
              ))}
            </div>
          </div>
        </div>
    )
}