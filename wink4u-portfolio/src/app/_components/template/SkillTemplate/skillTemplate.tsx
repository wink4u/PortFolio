import { ReactNode } from "react";
import Layout from "../ProjectLayout/projectLayout";
import ContentsLayout from "../ContentsLayout/contentsLayout";
import LayoutTopMargin, { LayoutBottomMargin }  from "@/app/_constants/margin";
import LayoutPadding from "@/app/_constants/padding";

export default function SkillTemplate({ children } : {children : ReactNode[] }) {
    return (
      <Layout marginTop={LayoutTopMargin.mt0} marginBottom={LayoutBottomMargin.mb0} padding={LayoutPadding.p20}>
        <ContentsLayout marginTop={LayoutTopMargin.mt10}>{children[0]}</ContentsLayout>
        <ContentsLayout>{children[1]}</ContentsLayout>
        <ContentsLayout>{children[2]}</ContentsLayout>
      </Layout>
    )
}