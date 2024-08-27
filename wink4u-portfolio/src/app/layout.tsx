import type { Metadata } from "next";
import CommonLayout from "./_components/template/CommonLayout/commonLayout";
import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "Wink4u's PortFolio",
  description: "프론트엔드 개발자 김승현의 포트폴리오 입니다.",
  metadataBase: new URL("https://wink4u.site"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    siteName: "프론트엔드 개발자 PortFolio",
    title: "wink4u's Portfolio",
    description: "프론트엔드 김승현의 포트폴리오 입니다.",
    images: "/OpenGraph.png",
    url: "https://wink4u.site",
  },
};

type Props = {
  children: React.ReactNode,
  modal: React.ReactNode,
}

export default function RootLayout({
  children, modal
}: Props) {
  return (
    <html lang="en">
      <body>
          <CommonLayout>
            {children}
            {modal}
          </CommonLayout>
        </body>
    </html>
  );
}
