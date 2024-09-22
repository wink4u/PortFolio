import { ReactNode } from "react";
import Layout from "../ProjectLayout/projectLayout";
import ContentsLayout from "../ContentsLayout/contentsLayout";
import LayoutTopMargin, { LayoutBottomMargin }  from "@/app/_constants/margin";
import LayoutPadding from "@/app/_constants/padding";
import styles from "./reademeTemplate.module.scss";

export default function ReadmeTemplate({ children } : {children: ReactNode[] }) {
    return(
      <Layout marginTop={LayoutTopMargin.mt0} marginBottom={LayoutBottomMargin.mb0} padding={LayoutPadding.p0}>
        <div className={styles.readmeTemplateContainer}>
          <ContentsLayout marginTop={LayoutTopMargin.mt10}>{children[0]}</ContentsLayout>
          <ContentsLayout>{children[1]}</ContentsLayout>
          <ContentsLayout>{children[2]}</ContentsLayout>
        </div>
      </Layout>
    )
}