import LayoutBottomMargin, { LayoutLeftRightMargin, LayoutTopMargin } from "@/app/(main)/_constants/margin";
import LayoutPadding from "@/app/(main)/_constants/padding";
import classNames from "classnames";
import { ReactNode } from "react";

interface ContentsLayoutProps {
    children: ReactNode;
    marginTop?: LayoutTopMargin;
    marginBottom?: LayoutBottomMargin;
    marginLR?: LayoutLeftRightMargin;
    padding?: LayoutPadding;

}

export default function ContentsLayout({ children, marginTop, marginBottom, marginLR, padding, ...rest } : ContentsLayoutProps) {
    return (
        <div className={classNames('contentsLayoutContainer', marginTop, marginBottom, marginLR, padding)} {...rest}>
          {children}
        </div>
    )
}

ContentsLayout.defaultProps = {
    marginTop: LayoutTopMargin.mt0,
    marginBottom: LayoutBottomMargin.mb30,
    marginLR: LayoutLeftRightMargin.m0,
    padding: LayoutPadding.p0,
}