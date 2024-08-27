import LayoutTopMargin, { LayoutBottomMargin } from "@/app/_constants/margin";
import LayoutPadding  from "@/app/_constants/padding";
import classNames from "classnames";
import styles from './projectLayout.module.scss';
import { ReactNode } from "react";

// LayoutProps 인터페이스 정의
interface ProjectLayoutProps {
    children: ReactNode;
    marginTop: LayoutTopMargin;
    marginBottom: LayoutBottomMargin;
    padding: LayoutPadding;
}

// Layout 컴포넌트 정의
export default function ProjectLayout({ children, marginTop = LayoutTopMargin.mt0, marginBottom = LayoutBottomMargin.mb0, padding = LayoutPadding.p0, ...rest }: ProjectLayoutProps) {
    return (
        <div className={classNames(styles.layout, marginTop, marginBottom, padding)} {...rest}>
            {children}
        </div>
    );
}
