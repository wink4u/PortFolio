import { ReactNode } from "react";
import Layout from "../Layout/layout";
import ContentsLayout from "../ContentsLayout/contentsLayout";
import LayoutBottomMargin, { LayoutTopMargin } from "@/app/_constants/margin";
import LayoutPadding from "@/app/_constants/padding";
import styles from './InfoTemplate.module.scss';

export default function InfoTemplate({ children } : {children : ReactNode[] }) {
    return(
      <Layout marginTop={LayoutTopMargin.mt10} marginBottom={LayoutBottomMargin.mb10} padding={LayoutPadding.p20}>
        <ContentsLayout marginTop={LayoutTopMargin.mt10}>{children[0]}</ContentsLayout>
        <ContentsLayout>{children[1]}</ContentsLayout>
        <ContentsLayout>{children[2]}</ContentsLayout>
        <ContentsLayout>{children[3]}</ContentsLayout>
      </Layout>
    )
}