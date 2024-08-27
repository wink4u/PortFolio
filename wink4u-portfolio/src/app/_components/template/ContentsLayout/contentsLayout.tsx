import LayoutTopMargin, {LayoutBottomMargin,  LayoutLeftRightMargin } from "@/app/_constants/margin";
import LayoutPadding from "@/app/_constants/padding";
import classNames from "classnames";
import { ReactNode } from "react";

interface ContentsLayoutProps {
    children: ReactNode;
    marginTop?: LayoutTopMargin;
    marginBottom?: LayoutBottomMargin;
    marginLR?: LayoutLeftRightMargin;
    padding?: LayoutPadding;

}

function ContentsLayout({ children, marginTop, marginBottom, marginLR, padding, ...rest } : ContentsLayoutProps) {
    return (
        <div className={classNames('contentsLayoutContainer', marginTop, marginBottom, marginLR, padding)} {...rest}>
          {children}
        </div>
    )
}

export default ContentsLayout;

ContentsLayout.defaultProps = {
    marginTop: LayoutTopMargin.mt0,
    marginBottom: LayoutBottomMargin.mb30,
    marginLR: LayoutLeftRightMargin.m0,
    padding: LayoutPadding.p0,
}