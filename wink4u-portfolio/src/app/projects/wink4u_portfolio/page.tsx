import ReadmeHeader from "@/app/_components/atoms/readmeHeader/readmeHeader";
import Readme from "@/app/_components/page/Readme/page";
import { PortFolio } from "@/app/_constants/readme/portfolio";

export default function WinktuPortfolio() {
    return(
        <>
          <ReadmeHeader title="Wink4u-PortFolio" />
          <Readme project={PortFolio} />
        </>
    )
}