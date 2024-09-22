import ReadmeHeader from "@/app/_components/atoms/readmeHeader/readmeHeader";
import Readme from "@/app/_components/page/Readme/page";
import { RefillProject } from "@/app/_constants/readme/refill";

export default function PlayPlace() {
    return(
        <>
          <ReadmeHeader title="Re:Fill" />
          <Readme project={RefillProject} />
        </>
    )
}