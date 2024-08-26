import Stacks from "@/app/_constants/describe";
import StackItem from "../../atoms/stackItem/stackItem";
import styles from "./stackList.module.scss";

export default function StackList() {
    return(
        <div className={styles.StackListDiv}>
          {Stacks.map(stack => (
            <StackItem key={stack.id} stack={stack.stack} /> 
          ))}
        </div>
    )
}