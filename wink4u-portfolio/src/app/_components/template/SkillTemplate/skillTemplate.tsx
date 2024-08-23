import { ReactNode } from "react";
import Layout from "../Layout/layout";
import ContentsLayout from "../ContentsLayout/contentsLayout";
import { LayoutTopMargin } from "@/app/_constants/margin";
import LayoutPadding from "@/app/_constants/padding";

export default function SkillTemplate({ children } : {children : ReactNode[] }) {
    return (
      <Layout padding={LayoutPadding.p20}>
        <ContentsLayout marginTop={LayoutTopMargin.mt10}>{children[0]}</ContentsLayout>
        <ContentsLayout>{children[1]}</ContentsLayout>
        <ContentsLayout>{children[2]}</ContentsLayout>
      </Layout>
    )
}