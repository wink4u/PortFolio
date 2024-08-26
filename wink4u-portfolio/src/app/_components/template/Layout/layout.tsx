import LayoutBottomMargin, { LayoutTopMargin } from "@/app/_constants/margin";
import LayoutPadding from "@/app/_constants/padding";
import classNames from "classnames";
import styles from './layout.module.scss';
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    marginTop?: LayoutTopMargin;
    marginBottom?: LayoutBottomMargin;
    padding?: LayoutPadding;
}

export default function Layout({ children, marginTop, marginBottom, padding, ...rest} : LayoutProps) {
    return(
        <div className={classNames(`${styles.layout}`,  marginTop && marginTop.toString(), 
        marginBottom && marginBottom.toString(), 
        padding && padding.toString())} {...rest}>
            {children}
        </div>
    )
}

Layout.defaultProps = {
    marginTop: LayoutTopMargin.mt0,
    marginBottom: LayoutBottomMargin.mb0,
    padding: LayoutPadding.p0,
}